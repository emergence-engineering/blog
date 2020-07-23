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
  height: 100vh;
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Body style={bodyStyle as object}>
          <Main />
          <NextScript />
        </Body>
      </HTMLRoot>
    );
  }
}
