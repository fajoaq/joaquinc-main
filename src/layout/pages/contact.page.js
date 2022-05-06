import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import { ContactForm } from "../../components/forms/contact/contact-form-control.component";
import {
  ContentContainer,
  Article,
} from "../../components/containers.component";

// TBD remove the need to adjust article height based on screen width
const StyledArticle = styled(Article)`
  && .contact-article-form {
    min-height: 478px;
  }

  ${({ theme }) => `${theme.breakpoints.down("sm")}`} {
    && .contact-article-form {
      min-height: 542px;
    }
  }
`;

const ContactArticle = (props) => {
  const [transitionState, setTransitionState] = useTransitionState();

  // because transitions wont work when heights are the same
  // we add one from new height
  useEffect(() => {
    const { offsetHeight } = transitionState.contentRef.current;
    const newHeight =
      transitionState.mainContainerHeight === offsetHeight
        ? offsetHeight - 1
        : offsetHeight;

    setTransitionState((prev) => ({
      ...prev,
      mainContainerHeight: newHeight,
    }));
  }, []);

  // we mark one of the container's children with a special class
  // to mark it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...props}
    >
      <StyledArticle
        component="article"
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <Container maxWidth="md">
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
        </Container>
      </StyledArticle>
    </ContentContainer>
  );
};
ContactArticle.displayName = "ContactArticle";

export { ContactArticle };
