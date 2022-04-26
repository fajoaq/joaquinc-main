import { createRef } from "react";
import { CSSTransition } from "react-transition-group";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { NavHeaderLayout } from "./nav-header.layout";
import { Footer } from "../components/footer.component";
import { useTransitions } from "../hooks/useTransitions";
import { constants } from "../styles/theme";

const DimensionsContainer = styled(Container)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4em 0;
  tranisition: opacity 1s ease-in-out;

  && .transition-enter-done {
    min-height: ${({ theme, dimensions }) =>
      dimensions == undefined
        ? theme.constants.mainContainerHeight
        : dimensions}px;

    max-height: ${({ theme, dimensions }) =>
      dimensions == undefined
        ? theme.constants.mainContainerHeight
        : dimensions}px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding-left: 12px;
    padding-right: 12px;
    justify-content: start;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 0.2em;
  }
`;

const AppLayout = ({ articlesData, ...rest }) => {
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
    <DimensionsContainer
      id="dimensions-container"
      maxWidth="lg"
      disableGutters
      dimensions={mainContainerHeight}
      {...rest}
    >
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
        timeout={constants.navTimeout}
        classNames="transition"
      >
        <main ref={mainRef}>
          {articlesData.map(({ Article }, index) => {
            const id = index === 0 ? "initial" : null;
            childList.current[index] = createRef();

            return (
              <CSSTransition
                key={`main-article-${index}`}
                nodeRef={childList.current[index]}
                in={childTransition}
                timeout={constants.navTimeout}
                classNames={
                  index === activeArticleIndex ? "active" : "inactive"
                }
              >
                {/* pass onclick funtion to hero (index 0) article  */}
                {/* with next index in array (index 1) */}
                <Article
                  ref={childList.current[index]}
                  onClick={index === 0 ? () => handleNavClick(1) : null}
                  sharedClass={
                    index === activeArticleIndex ? "active" : "inactive"
                  }
                  id={id}
                />
              </CSSTransition>
            );
          })}
        </main>
      </CSSTransition>
      <Footer />
    </DimensionsContainer>
  );
};

export { AppLayout };
