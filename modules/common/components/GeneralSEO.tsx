import React, { FunctionComponent } from "react";

const title = "Emergence Engineering";
const description =
  "Emergence Engineering is a software engineering company from Budapest. Feel free to contact us!";
const url = "https://emergence-engineering.com";

const GeneralSEO: FunctionComponent<{}> = () => (
  <>
    <title>{title}</title>
    <meta key="og:url" name="og:url" property="og:url" content={url} />
    <meta key="og:type" name="og:type" property="og:type" content="website" />
    <meta key="og:title" name="og:title" property="og:title" content={title} />
    <meta
      key="description"
      name="description"
      property="og:description"
      content={description}
    />
    <meta
      key="og:image"
      name="og:image"
      property="og:image"
      content="https://upload.wikimedia.org/wikipedia/commons/d/d2/Codinglogo.jpg"
    />
  </>
);

export default GeneralSEO;
