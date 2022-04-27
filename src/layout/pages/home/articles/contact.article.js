import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";
import { ContactLeadForm } from "../../../../components/forms/contact-form-control.component";

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

const StyledArticle = styled(Article)`
  background-color: ${({ theme }) => theme.palette.background.main};

  && .contact-article-form {
    min-height: 478px;
  }

  ${({ theme }) => `${theme.breakpoints.down("sm")}`} {
    min-height: 542px;
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
        <ContactLeadForm
          idBase="contact-article-form"
          className="contact-article-form"
          successMessage="Thank You for Your Message"
          confirmEmailMessage="I will be in contact shortly."
        />
      </Container>
    </StyledArticle>
  </StyledContentContainer>
));
ContactArticle.displayName = "ContactArticle";

export { ContactArticle };
