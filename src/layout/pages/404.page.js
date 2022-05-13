import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { PageLayout } from "./common/page-layout.component";

const StyledContainer = styled(Container)`
  padding-top: 0;
`;

const NotFoundArticle = (props) => {
  const router = useRouter();

  // redirect user after 3 seconds
  useEffect(() => {
    router.prefetch("/");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <PageLayout {...props}>
      <StyledContainer
        className="inline-padding inline-padding-vertical"
        component="article"
        maxWidth="md"
        disableGutters
      >
        <Typography component="h1" variant="h2" className="article-title">
          Oops!
        </Typography>
        <br />

        <Typography fontSize={{ xs: "1.1rem", md: "1.5rem" }}>
          This page does not seem to exist, redirecting to the Homepage...
        </Typography>
      </StyledContainer>
    </PageLayout>
  );
};

export { NotFoundArticle };
