import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import {
  ContentContainer,
  Article,
} from "../../../../components/common.component";
import { ZohoLeadForm } from "../../../../components/forms/zoho-form-control.component";

const text = `
  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
`;

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

const StyledArticle = styled(Article)`
  background-color: ${({ theme }) => theme.palette.background.main};

  && .contact-article-form {
    min-height: 386px;
  }
`;

const ContactArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <StyledContentContainer {...rest} className={sharedClass}>
    <StyledArticle container component="article" ref={ref}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">
          Contact Me
        </Typography>
        <br />
        <ZohoLeadForm
          idBase="contact-article-form"
          className="contact-article-form"
          successMessage="Thank You for Your Message"
          confirmEmailMessage="I will be in touch soon."
        />
      </Container>
    </StyledArticle>
  </StyledContentContainer>
));
ContactArticle.displayName = "ContactArticle";

export { ContactArticle };
