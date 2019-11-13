import React, { FunctionComponent } from "react";

import MarkDown from "../../modules/article/components/Markdown";
import {
  InlineLatex,
  LatexSection,
} from "../../modules/article/components/Latex";

const markdownContent = `
# Markdown title
## Markdown subtitle

Markdown paragraph

Markdown list:
* item
* item
* item

`;

const latexContent = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

const inlineLatexContent = "a = b";
const Blog: FunctionComponent<{}> = () => (
  <div>
    <MarkDown source={markdownContent} />
    <LatexSection tex={latexContent} />
    <span>Inline LaTeX: </span>
    <InlineLatex tex={inlineLatexContent} />
  </div>
);

export default Blog;
