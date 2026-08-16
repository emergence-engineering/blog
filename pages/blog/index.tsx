import React, { FunctionComponent } from "react";
import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import TwBlog from "../../features/twBlog/TwBlog";
import { BlogSEO } from "../../features/blog/components";
import { EnContact } from "../../features/ge/components/EnContact";

const Blog: FunctionComponent = () => (
  <TwLayout>
    <BlogSEO />
    <TwBlog />
    <EnContact />
  </TwLayout>
);

export default Blog;