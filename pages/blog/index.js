import { Fragment } from "react";
import Head from "next/head";

import { AppLayout } from "../../src/layout";
import {
  navButtons,
  navConstants,
} from "../../src/components/nav-buttons.component";
import {
  HeroArticle,
  BlogArticle,
  ContactArticle,
} from "../../src/layout/pages";
import { SEO } from "../../src/seo/seo";

// we're replacing work article with blog article
// in the articles array
const articlesData = [
  {
    Article: HeroArticle,
    Icon: navButtons[navConstants.home],
    ariaLabel: "Home",
  },
  {
    Article: BlogArticle,
    Icon: navButtons[navConstants.blog],
    ariaLabel: "Blog",
  },
  {
    Article: ContactArticle,
    Icon: navButtons[navConstants.contact],
    ariaLabel: "Contact me",
  },
];

const Index = () => {
  return (
    <Fragment>
      {/* route specific meta data */}
      <Head>
        <meta property="description" content={SEO.SITE_DESCRIPTION} />
        <meta name="description" content={SEO.SITE_DESCRIPTION} />
        <meta property="image" content={SEO.SITE_IMAGE} />
        <meta property="title" content={"Blog | " + SEO.SITE_TITLE} />
        <title>{"Blog | " + SEO.SITE_TITLE}</title>
      </Head>

      <AppLayout articlesData={articlesData} articleIndex={navConstants.blog} />
    </Fragment>
  );
};

export default Index;
