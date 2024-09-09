import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Root = styled.div`
  padding-bottom: 5rem;
  width: 100%;
`;

const Calendly = () => {
  const router = useRouter();

  useEffect(() => {
    const reloadCalendlyWidget = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    reloadCalendlyWidget();

    router.events.on("routeChangeComplete", reloadCalendlyWidget);

    return () => {
      router.events.off("routeChangeComplete", reloadCalendlyWidget);
    };
  }, [router.events]);

  return (
    <Root>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/viktor-vaczi/chat-with-v"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </Root>
  );
};

export default Calendly;
