import React from "react";
import Layout from "../features/common/components/Layout";
import { LPSEO } from "../features/blog/components/LPSEO";
import CaseStudiesList from "../features/landingPage/components/CaseStudiesList";


export default function CaseStudies() {
    return (
        <Layout>
            <LPSEO />
            <CaseStudiesList />
        </Layout>
    );
}
