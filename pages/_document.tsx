import React from "react";
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from "next/document";
import styled, { ServerStyleSheet } from "styled-components";

const bodyStyle = {
  width: "100%",
  height: "100vh",
  padding: 0,
  margin: 0,
  overflowX: "hidden",
};

const Body = styled.body`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

const HTMLRoot = styled.html`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

export default class MyDocument extends Document {
  // from https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <HTMLRoot lang="en" style={bodyStyle as object}>
        <Head>
          <link rel="stylesheet" type="text/css" href="/global.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300|Oswald"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/theme/material.min.css"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body style={bodyStyle as object}>
          <Main />
          <NextScript />
        </Body>
      </HTMLRoot>
    );
  }
}
