import React, { FunctionComponent } from "react";
import MathJax from "react-mathjax";

interface LatexProps {
  tex: string;
}

export const LatexSection: FunctionComponent<LatexProps> = ({ tex }) => (
  <MathJax.Provider>
    <MathJax.Node formula={tex} />
  </MathJax.Provider>
);

export const InlineLatex: FunctionComponent<LatexProps> = ({ tex }) => (
  <MathJax.Provider>
    <span>
      <MathJax.Node inline formula={tex} />
    </span>
  </MathJax.Provider>
);
