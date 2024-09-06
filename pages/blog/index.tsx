import React, { FunctionComponent } from "react";
import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import TwBlog from "../../features/twBlog/TwBlog";
import { BlogSEO } from "../../features/blog/components";

const Blog: FunctionComponent = () => (
  <TwLayout>
    <BlogSEO />
    <TwBlog />
  </TwLayout>
);

export default Blog;
