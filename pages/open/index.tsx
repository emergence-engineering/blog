import React, { FunctionComponent } from "react";
import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import TwOpenSource from "../../features/twBlog/TwOpenSource";
import { BlogSEO } from "../../features/blog/components";

const Blog: FunctionComponent = () => (
  <TwLayout>
    <BlogSEO />
    <TwOpenSource />
  </TwLayout>
);

export default Blog;
