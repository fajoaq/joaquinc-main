/* import Head from "next/head";
import { default as homeConfig } from "../src/pages/home/config/home.config";
import { Page } from "../src/pages/";
import { SEO } from "../src/utils/constants.utils"; */

/* --------------------------- */
// "Homepage" custom components
// www.website.com/

/* const Headers = () => (
  <Head>
    <meta property="description" content={SEO.SITE_DESCRIPTION} />
    <meta name="description" content={SEO.SITE_DESCRIPTION} />
    <meta property="image" content={SEO.SITE_IMAGE} />
    <meta property="title" content={SEO.SITE_TITLE} />
    <title>For {SEO.SITE_TITLE} Count On PagePrimer</title>
  </Head>
); */

/* const Index = () => <Page pageConfig={homeConfig} headers={Headers} />; */
import { Fragment } from "react";

import { HeaderLayout } from "../src/layout";
import { HeroArticle } from "../src/pages";

const Index = () => (
  <Fragment>
    <HeaderLayout>
      <div>Icon</div>
      <div>Icon</div>
      <div>Icon</div>
      <div>Icon</div>
    </HeaderLayout>
    <HeroArticle />
  </Fragment>
);

export default Index;
