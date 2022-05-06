import { useEffect } from "react";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../context/transition.context";
import { ArticleNavigation } from "./common/navigation.component";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import {
  ContentContainer,
  Article,
} from "../../components/containers.component";
import Container from "@mui/material/Container";

const text = `
  Currenly only for testing. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
`;

const BlogArticle = (props) => {
  const [transitionState, setTransitionState] = useTransitionState();

  // because transitions wont work when heights are the same
  // we add one to the new height
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
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...props}
    >
      <Article
        container
        component="article"
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <Container maxWidth="md">
          <ArticleNavigation fromArticle="Blog" toArticle="Work" />
          <Typography variant="body1">{text}</Typography>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="body1">{text}</Typography>
        </Container>
      </Article>
    </ContentContainer>
  );
};
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
