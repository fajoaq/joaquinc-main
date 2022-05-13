import { Fragment } from "react";
import { createClient } from "contentful";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { BlogLayout, BlogPost } from "../../src/layout/pages";

const Page = ({ post }) => (
  <Fragment>
    {/* route specific meta data */}
    <Head>
      <meta property="description" content={SEO.SITE_DESCRIPTION} />
      <meta name="description" content={SEO.SITE_DESCRIPTION} />
      <meta property="image" content={SEO.SITE_IMAGE} />
      <meta property="title" content={"Blog | " + post.fields.title} />
      <title>{"Blog | " + post.fields.title}</title>
    </Head>

    <BlogLayout toArticle="blog" toArticleTitle="all posts">
      <BlogPost blogPost={post} />
    </BlogLayout>
  </Fragment>
);

const clientx = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps({ params }) {
  const { items } = await clientx.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: items[0],
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const res = await clientx.getEntries({ content_type: "blogPost" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Page;
