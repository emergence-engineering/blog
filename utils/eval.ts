export const evalFn = (
  cmd: string,
  newConsole: { log: (i: string) => void },
) => {
  console.log("eval");
  return eval(cmd);
};
