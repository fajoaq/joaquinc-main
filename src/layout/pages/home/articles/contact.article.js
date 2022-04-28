import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { ContactForm } from "../../../../components/forms/contact/contact-form-control.component";
import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const StyledArticle = styled(Article)`
  && .contact-article-form {
    min-height: 478px;
  }

  ${({ theme }) => `${theme.breakpoints.down("sm")}`} {
    min-height: 542px;
  }
`;

const ContactArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <ContentContainer {...rest} className={sharedClass}>
    <StyledArticle container component="article" ref={ref}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3" className="article-title">
          Contact Me
        </Typography>
        <br />

        <ContactForm
          idBase="contact-article-form"
          className="contact-article-form"
          successMessage="Thank You for Your Message"
          confirmEmailMessage="I will be in contact shortly."
        />
      </Container>
    </StyledArticle>
  </ContentContainer>
));
ContactArticle.displayName = "ContactArticle";

export { ContactArticle };
