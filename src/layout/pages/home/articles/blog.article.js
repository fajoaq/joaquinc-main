import { forwardRef } from "react";
import { styled } from "@mui/material/styles";

import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const text = `
  Currenly only for testing. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
`;

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

const BlogArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <StyledContentContainer {...rest} className={sharedClass}>
    <Article container component="article" ref={ref}>
      <div>
        <p>Blog</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </Article>
  </StyledContentContainer>
));
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
