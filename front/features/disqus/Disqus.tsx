import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";

const DisqusRoot = styled.div`
  margin-top: 2rem;
`;

const Disqus: FunctionComponent<{ pageUrl: string; pageId: string }> = ({
  pageId,
  pageUrl,
}) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.disqus_config = function createConfig() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/no-this-in-sfc
      this.page.url = pageUrl; // Replace PAGE_URL with your page's canonical URL variable
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/no-this-in-sfc
      this.page.identifier = pageId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function loadDisqus() {
      // DON'T EDIT BELOW THIS LINE
      const d = document;
      const s = d.createElement("script");
      s.src = "https://emergence-engineering-1.disqus.com/embed.js";
      s.setAttribute("data-timestamp", String(+new Date()));
      (d.head || d.body).appendChild(s);
    })();
  }, []);

  return (
    <DisqusRoot>
      <div id="disqus_thread" />
    </DisqusRoot>
  );
};

export default Disqus;
