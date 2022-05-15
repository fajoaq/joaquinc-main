import { Fragment } from "react";
import { createClient } from "contentful";
import Head from "next/head";

import { SEO } from "../../src/constants/seo";

import { WorkArticle } from "../../src/layout/pages";

const Page = ({ caseStudies }) => {
  if (!caseStudies)
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
        <meta property="title" content={"Work | " + SEO.SITE_TITLE} />
        <title>{"Work | " + SEO.SITE_TITLE}</title>
      </Head>

      <WorkArticle caseStudies={caseStudies} />
    </Fragment>
  );
};

export async function getStaticProps() {
  let res = null;

  const clientx = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    res = await clientx.getEntries({
      content_type: "caseStudy",
    });
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      caseStudies: JSON.parse(res.stringifySafe()).items,
      revalidate: 1,
      fallback: true,
    },
  };
}

export default Page;

// "fields.externalLink[exists]": true,
/* 
You can check for the presence of a field using the [exists] operator. It checks whether a certain field is defined (i.e. it has any value) or not.
*/
