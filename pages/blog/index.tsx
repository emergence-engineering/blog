import React, { FunctionComponent } from "react";
import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import TwBlog from "../../features/twBlog/TwBlog";
import { BlogSEO } from "../../features/blog/components";
import { TwContact } from "../../features/twLandingPage/twComponents/TwContact";

const Blog: FunctionComponent = () => (
  <TwLayout>
    <BlogSEO />
    <TwBlog />
    <TwContact />
  </TwLayout>
);

export default Blog;
