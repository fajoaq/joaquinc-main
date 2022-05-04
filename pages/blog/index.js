import { Fragment } from "react";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { BlogArticle } from "../../src/layout/pages";

const Page = () => (
  <Fragment>
    {/* route specific meta data */}
    <Head>
      <meta property="description" content={SEO.SITE_DESCRIPTION} />
      <meta name="description" content={SEO.SITE_DESCRIPTION} />
      <meta property="image" content={SEO.SITE_IMAGE} />
      <meta property="title" content={"Blog | " + SEO.SITE_TITLE} />
      <title>{"Blog | " + SEO.SITE_TITLE}</title>
    </Head>

    <BlogArticle />
  </Fragment>
);

export default Page;
