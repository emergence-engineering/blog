import React from "react";
import Script from "next/script";
import styled from "styled-components";

const Root = styled.div`
  padding-bottom: 5rem;
  width: 100%;
`;

const Calendly = () => (
  <Root>
    {/*<div*/}
    {/*  className="calendly-inline-widget"*/}
    {/*  data-url="https://calendly.com/viktor-vaczi?hide_landing_page_details=1&hide_gdpr_banner=1"*/}
    {/*></div>*/}
    {/*<script*/}
    {/*  type="text/javascript"*/}
    {/*  src="https://assets.calendly.com/assets/external/widget.js"*/}
    {/*  async*/}
    {/*></script>*/}
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/viktor-vaczi/chat-with-v"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
    <Script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></Script>
  </Root>
);

export default Calendly;
