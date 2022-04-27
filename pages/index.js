import { Fragment } from "react";
import Head from "next/head";

import { AppLayout } from "../src/layout";
import {
  navButtons,
  navConstants,
} from "../src/components/nav-buttons.component";
import { HeroArticle, WorkArticle, ContactArticle } from "../src/layout/pages";
import { SEO } from "../src/seo/seo";

const articlesData = [
  {
    Article: HeroArticle,
    Icon: navButtons[navConstants.home],
  },
  {
    Article: WorkArticle,
    Icon: navButtons[navConstants.work],
  },
  {
    Article: ContactArticle,
    Icon: navButtons[navConstants.contact],
  },
];

const Index = () => {
  return (
    <Fragment>
      <Head>
        <meta property="description" content={SEO.SITE_DESCRIPTION} />
        <meta name="description" content={SEO.SITE_DESCRIPTION} />
        <meta property="image" content={SEO.SITE_IMAGE} />
        <meta property="title" content={SEO.SITE_TITLE} />
        <title>{SEO.SITE_TITLE}</title>
      </Head>

      <AppLayout articlesData={articlesData} />
    </Fragment>
  );
};

export default Index;
