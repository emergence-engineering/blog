import React from "react";
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import GeneralSEO from "../features/common/components/GeneralSEO";

export default class MyDocument extends Document<{
  shouldRenderGeneralSEO: boolean;
}> {
  // from https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        shouldRenderGeneralSEO: !ctx.pathname.includes("blog"),
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
      <Html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#" lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-153510239-1"
          />
          <link rel="stylesheet" type="text/css" href="/global.css" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Oswald:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {this.props.shouldRenderGeneralSEO ? <GeneralSEO /> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="https://js.hs-scripts.com/6783875.js"
        /> */}
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        />
      </Html>
    );
  }
}
