import { Fragment, useEffect, useState, createRef, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { contentGridSharedStyles } from "../common/common.styles";

const text = `
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
`;

const ContentContainer = styled("div")`
  ${contentGridSharedStyles}

  && article > div {
    padding: 3.5em 2.5em 2.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.background.light};
  }

  && .active-enter-done {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledArticle = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  visibility: hidden;
  height: max-content;
  width: 100%;
  opacity: 0;
  transition: opacity, visibility, 500ms ease-in-out;
`;

const ContactArticle = forwardRef(({ children, ...rest }, ref) => (
  <ContentContainer>
    <StyledArticle container {...rest} ref={ref}>
      <div>
        <p>Contact {text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </StyledArticle>
  </ContentContainer>
));

export { ContactArticle };
