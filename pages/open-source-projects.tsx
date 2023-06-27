import React from "react";
import Layout from "../features/common/components/Layout";
import { LPSEO } from "../features/blog/components/LPSEO";
import OpenSrcPr from "../features/landingPage/components/OpenSrcPr";

export default function OpenSourceProjects() {
  return (
    <Layout>
      <LPSEO />
      <OpenSrcPr />
    </Layout>
  );
}
