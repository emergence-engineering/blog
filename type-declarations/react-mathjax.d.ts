interface MathJaxType {
  Node: React.ComponentType<{ formula: string; inline?: boolean }>;
  Context: React.ComponentType;
  Text: React.ComponentType;
  Provider: React.ComponentType;
}

declare module "react-mathjax" {
  const MathJax: MathJaxType;
  export = MathJax;
}
