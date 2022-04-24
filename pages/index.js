import { createRef } from "react";
import { CSSTransition } from "react-transition-group";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { AppLayout } from "../src/layout";
import { NavHeaderLayout } from "../src/layout";
import {
  navButtons,
  navConstants,
} from "../src/components/nav-buttons.component";
import {
  HeroArticle,
  WorkArticle,
  ContactArticle,
  ExternalArticle,
} from "../src/pages";

const articlesData = [
  {
    Article: HeroArticle,
    Icon: navButtons[navConstants.home],
  },
  {
    Article: WorkArticle,
    Icon: navButtons[navConstants.work],
  },
  {
    Article: ContactArticle,
    Icon: navButtons[navConstants.contact],
  },
  {
    Article: ExternalArticle,
    Icon: navButtons[navConstants.external],
  },
];

const StyledGridBox = styled(Box)`
  display: grid;
`;

import { useTransitions } from "../src/hooks/useTransitions";

const Index = () => {
  const [
    childTransition,
    handleNavClick,
    mainRef,
    childList,
    activeArticleIndex,
    mainContainerHeight,
    transition,
  ] = useTransitions();

  return (
    <AppLayout dimensions={mainContainerHeight}>
      <NavHeaderLayout
        articlesData={articlesData}
        activeArticleIndex={childTransition ? activeArticleIndex : null}
        handleClick={handleNavClick}
        fontSize={{ xs: "3rem", md: "4rem" }}
        color="text.main"
      />
      <CSSTransition
        nodeRef={mainRef}
        in={transition}
        timeout={260}
        classNames="transition"
      >
        <StyledGridBox component="main" ref={mainRef}>
          {articlesData.map(({ Article }, index) => {
            const id = index === 0 ? "initial" : null;
            childList.current[index] = createRef();

            return (
              <CSSTransition
                key={`main-article-${index}`}
                nodeRef={childList.current[index]}
                in={childTransition}
                timeout={260}
                classNames={
                  index === activeArticleIndex ? "active" : "inactive"
                }
              >
                <Article
                  ref={childList.current[index]}
                  sharedClass={
                    index === activeArticleIndex ? "active" : "inactive"
                  }
                  id={id}
                />
              </CSSTransition>
            );
          })}
        </StyledGridBox>
      </CSSTransition>
    </AppLayout>
  );
};

export default Index;
