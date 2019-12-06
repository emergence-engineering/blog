import React from "react";
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import GeneralSEO from "../modules/common/components/GeneralSEO";

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
      <html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#" lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-153510239-1"
          />
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
          <GeneralSEO />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
