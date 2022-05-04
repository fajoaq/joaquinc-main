import { Fragment } from "react";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { WorkArticle } from "../../src/layout/pages";

const Page = () => (
  <Fragment>
    {/* route specific meta data */}
    <Head>
      <meta property="description" content={SEO.SITE_DESCRIPTION} />
      <meta name="description" content={SEO.SITE_DESCRIPTION} />
      <meta property="image" content={SEO.SITE_IMAGE} />
      <meta property="title" content={"Work | " + SEO.SITE_TITLE} />
      <title>{"Work | " + SEO.SITE_TITLE}</title>
    </Head>

    <WorkArticle />
  </Fragment>
);

export default Page;
