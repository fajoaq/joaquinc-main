import { forwardRef } from "react";

import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const text = `
  Currenly only for testing. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
`;

const BlogArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <ContentContainer {...rest} className={sharedClass}>
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
  </ContentContainer>
));
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
