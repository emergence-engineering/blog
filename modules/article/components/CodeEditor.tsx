/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { Button } from "../../common/components/Button";

const CodeMirror = dynamic(import("./CodeMirror"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Root = styled.div`
  margin: 2rem 0;
`;

const EditorWrapper = styled.div<{ minHeight?: string }>`
  min-height: ${({ minHeight }) => minHeight || "initial"};
  .CodeMirror {
    height: initial;
  }
`;

const ScriptResult = styled.div`
  color: brown;
`;

const LogResult = styled.div`
  color: purple;
`;

const CodeError = styled.div`
  color: darkred;
  font-weight: bold;
`;

const SSRCode = styled.div`
  display: none;
`;

const CodeEditor: FunctionComponent<{
  value: string;
  hiddenCode?: string;
  onChange?: (text: string) => void;
  minHeight?: string;
}> = ({ value, hiddenCode, onChange, minHeight }) => {
  let logArr: any[] = [];
  const [logResult, setLogResult] = useState<any[]>([]);
  const [code, setCode] = useState(value);
  const [codeError, setCodeError] = useState("");
  const [scriptResult, setScriptResult] = useState("");
  const codeChange = useCallback((editor: any, data: any, text: string) => {
    setCode(text);
    if (onChange) onChange(text);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newConsole = useMemo(
    () => ({
      ...console,
      log: (...args: any[]) => {
        logArr = [...logArr, ...args];
      },
    }),
    [logArr],
  );
  const runCode = useCallback(() => {
    logArr = [];
    setScriptResult("");
    setLogResult([]);
    setCodeError("");
    try {
      // eslint-disable-next-line no-eval
      const result = eval(
        `${hiddenCode || ""}\n${code}`.replace(/console/g, "newConsole"),
      );
      setScriptResult(result);
      setLogResult(logArr.map(i => i.toString()));
    } catch (e) {
      setCodeError(e.message);
    }
  }, [code, hiddenCode]);
  return (
    <Root>
      <EditorWrapper minHeight={minHeight}>
        <CodeMirror value={value} onChange={codeChange} />
        {typeof window === "undefined" && <SSRCode>{value}</SSRCode>}
      </EditorWrapper>
      <Button onClick={runCode}>Run code</Button>
      <ScriptResult>{scriptResult}</ScriptResult>
      <LogResult>
        {logResult.map((log, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={idx}>{log}</div>
        ))}
      </LogResult>
      <CodeError>{codeError}</CodeError>
    </Root>
  );
};

export default CodeEditor;
