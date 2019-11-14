import React, { FunctionComponent } from "react";

import ArticleWrapper from "../../modules/article/components/ArticleWrapper";
import MarkDown from "../../modules/article/components/Markdown";
import {
  InlineLatex,
  LatexSection,
} from "../../modules/article/components/Latex";
import CodeEditor from "../../modules/article/components/Code";

const markdownContent = `
# Markdown title
## Paragraph section

On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.

Markdown list:
* item
* item
* item

## Quote section
> Quoted thing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed velit vitae augue sodales tincidunt. Aliquam bibendum neque pretium elementum rutrum. Morbi cursus vestibulum dolor condimentum tristique. Curabitur et erat enim. Ut fringilla molestie ipsum. Suspendisse turpis tortor, volutpat quis malesuada in, suscipit eu eros. Nam ac suscipit velit. Praesent non nisl dui. Nullam sagittis porttitor accumsan. Integer ultrices consectetur pellentesque. Mauris ut libero molestie, efficitur risus ut, auctor nibh.

## Link section
[link to blog page](/blog)

# h1
## h2
### h3
#### h4
##### h5
###### h6

`;

const latexContent = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

const inlineLatexContent = "a = b";
const Blog: FunctionComponent<{}> = () => (
  <ArticleWrapper>
    <MarkDown source={markdownContent} />
    <LatexSection tex={latexContent} />
    <span>Inline LaTeX: </span>
    <InlineLatex tex={inlineLatexContent} />
    <CodeEditor />
  </ArticleWrapper>
);

export default Blog;
