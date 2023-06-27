import React from "react";
import Layout from "../features/common/components/Layout";
import { LPSEO } from "../features/blog/components/LPSEO";
import OurReferences from "../features/landingPage/components/OurReferences";

export default function CaseStudies() {
  return (
    <Layout>
      <LPSEO />
      <OurReferences />
    </Layout>
  );
}
