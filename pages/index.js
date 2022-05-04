import { Fragment } from "react";
import Head from "next/head";

import { SEO } from "../src/constants/seo";

import { HeroArticle } from "../src/layout/pages";

const Index = () => (
  <Fragment>
    {/* route specific meta data */}
    <Head>
      <meta property="description" content={SEO.SITE_DESCRIPTION} />
      <meta name="description" content={SEO.SITE_DESCRIPTION} />
      <meta property="image" content={SEO.SITE_IMAGE} />
      <meta property="title" content={SEO.SITE_TITLE} />
      <title>{SEO.SITE_TITLE}</title>
    </Head>

    <HeroArticle />
  </Fragment>
);

export default Index;
