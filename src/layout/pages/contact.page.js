import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { PageLayout } from "./common/page-layout.component";
import { ContactForm } from "../../components/forms/contact/contact-form-control.component";

// TBD remove the need to adjust article
// when the contact page hint changes container height
const StyledContainer = styled(Container)`
  padding-top: 0;

  && .contact-article-form {
    min-height: 478px;
  }

  ${({ theme }) => `${theme.breakpoints.down("sm")}`} {
    && .contact-article-form {
      min-height: 542px;
    }
  }
`;

const ContactArticle = (props) => (
  <PageLayout navigationHeader={false} {...props}>
    <StyledContainer
      className="inline-padding inline-padding-vertical"
      component="article"
      maxWidth="md"
      disableGutters
    >
      <Typography component="h1" variant="h2" className="article-title">
        Contact Me
      </Typography>
      <br />

      <ContactForm
        idBase="contact-article-form"
        className="contact-article-form"
        successMessage="Thank You for Your Message"
        confirmEmailMessage="I will be in contact shortly."
      />
    </StyledContainer>
  </PageLayout>
);

export { ContactArticle };
