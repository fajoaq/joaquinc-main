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
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import { HeaderLayout } from "../src/layout";
import { HeroArticle } from "../src/pages";

const Index = () => (
  <Fragment>
    <HeaderLayout fontSize="4rem" color="text.main">
      <a>
        <HomeIcon fontSize="inherit" />
      </a>

      <a>
        <FolderIcon fontSize="inherit" />
      </a>
      <a>
        <EmailIcon fontSize="inherit" />
      </a>
      <a>
        <GitHubIcon fontSize="inherit" />
      </a>
    </HeaderLayout>
    <HeroArticle />
  </Fragment>
);

export default Index;
