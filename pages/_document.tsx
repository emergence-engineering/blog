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
import { isGeRoute } from "../features/ge/routes";

export default class MyDocument extends Document<{
  shouldRenderGeneralSEO: boolean;
  locale?: string;
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
        // GE pages and blog articles provide their own SEO tags
        shouldRenderGeneralSEO:
          !ctx.pathname.includes("blog") && !isGeRoute(ctx.pathname),
        locale: ctx.locale,
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
      <Html
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
        lang={this.props.locale ?? "en"}
      >
        <Head>
          {/* global.css is imported in _app.tsx, which is what compiles its
              Tailwind directives. Linking public/global.css here as well
              served the browser the raw, uncompiled source. */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            rel="stylesheet"
          />
          {this.props.shouldRenderGeneralSEO ? <GeneralSEO /> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        />
        <script
          defer
          data-domain="emergence-engineering.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Html>
    );
  }
}
