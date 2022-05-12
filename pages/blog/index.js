import { Fragment } from "react";
import { createClient } from "contentful";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { BlogLayout, BlogIndex } from "../../src/layout/pages";

const Page = (props) => (
  <Fragment>
    {/* route specific meta data */}
    <Head>
      <meta property="description" content={SEO.SITE_DESCRIPTION} />
      <meta name="description" content={SEO.SITE_DESCRIPTION} />
      <meta property="image" content={SEO.SITE_IMAGE} />
      <meta property="title" content={"Blog | " + SEO.SITE_TITLE} />
      <title>{"Blog | " + SEO.SITE_TITLE}</title>
    </Head>

    <BlogLayout toArticle="work" toArticleTitle="my work">
      <BlogIndex blogPosts={props.posts} />
    </BlogLayout>
  </Fragment>
);

export async function getStaticProps() {
  const clientx = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await clientx.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default Page;
