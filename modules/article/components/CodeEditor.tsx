/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import { Button } from "../../common/components/Button";
import AsyncSVGIcon from "../../common/components/AsyncSvgIcon";
import theme from "../../../utils/theme";

const Loading = styled.div`
  height: 100%;
`;

const CodeMirror = dynamic(import("./CodeMirror"), {
  ssr: false,
  loading: () => <Loading>Loading...</Loading>,
});

const Root = styled.div`
  margin: 2rem 0;
`;

const EditorWrapper = styled.div<{ minHeight?: string }>`
  min-height: ${({ minHeight }) => minHeight || "initial"};
  .CodeMirror {
    height: initial;
  }
  position: relative;
`;

const ScriptResult = styled.div`
  color: ${theme.color.primary5};
  font-weight: 900;
`;

const LogResult = styled.div`
  font-weight: 900;
  color: ${theme.color.gray11};
`;

const CodeError = styled.div`
  color: ${theme.color.error};
  font-weight: bold;
`;

const SSRCode = styled.div`
  display: none;
`;

const RunButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem 0.4rem;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const RunIcon = styled(AsyncSVGIcon)``;

const RunText = styled.span`
  margin-left: 0.2rem;
`;

const ResultWrapper = styled.div<{ hasContent: boolean }>`
  display: ${({ hasContent }) => (hasContent ? "block" : "none")};
  padding: 2rem;
  margin-top: 1rem;
  transition: height 1s ease-in-out;
  background-color: #263238;
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
        <SSRCode>{value}</SSRCode>
        <RunButton onClick={runCode}>
          <RunIcon src="/play_circle_filled-24px.svg" />
          <RunText>Run code</RunText>
        </RunButton>
      </EditorWrapper>
      <ResultWrapper
        hasContent={!!(scriptResult || logResult.length || codeError)}
      >
        <ScriptResult>{scriptResult}</ScriptResult>
        <LogResult>
          {logResult.map((log, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>{log}</div>
          ))}
        </LogResult>
        <CodeError>{codeError}</CodeError>
      </ResultWrapper>
    </Root>
  );
};

export default CodeEditor;
