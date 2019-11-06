import React, { FunctionComponent } from "react";
import Link from "next/link";

const Blog: FunctionComponent<{}> = () => (
  <div>
    <h1>blog landing page</h1>
    <Link href="/article/article-1">
      <a>article-1</a>
    </Link>
  </div>
);

export default Blog;
