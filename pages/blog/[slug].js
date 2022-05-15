import { Fragment } from "react";
import { createClient } from "contentful";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { BlogLayout, BlogPost } from "../../src/layout/pages";

const Page = ({ post }) => {
  // fallback page
  if (!post)
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );

  return (
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
};

const clientx = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// You can search for entries based on the values of referenced entries.
export async function getStaticProps({ params }) {
  let data = null;
  try {
    data = await clientx.getEntries({
      content_type: "blogPost",
      "fields.slug.sys.contentType.sys.id": "slug",
      "fields.slug.fields.slug[match]": params.slug,
    });
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  if (!data.items.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  console.log(data.items[0]);

  return {
    props: {
      post: data.items[0],
      revalidate: 1,
      fallback: true,
    },
  };
}

export async function getStaticPaths() {
  let res = null;

  try {
    res = await clientx.getEntries({ content_type: "blogPost" });
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }

  if (!res.items.length) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Page;
