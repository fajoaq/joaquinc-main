import { createRef } from "react";
import { CSSTransition } from "react-transition-group";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { NavHeaderLayout } from "./nav-header.layout";
import { BackDrop } from "../components/back-drop.component";
import { Footer } from "../components/footer.component";
import { useTransitions } from "../hooks/useTransitions";
import { constants } from "../styles/theme";

// we added transform: scaled3d for the hardware acceleration
const DimensionsContainer = styled(Container)`
  ${({ theme, height }) => `
  grid-column: 1;
  grid-row: 1;
  display: grid;
  position: relative;
  align-content: start;
  min-height: 100vh;


  && main {
    transform-origin: top center;
    transform: scale3d(1, 0, 1);
    transition: opacity ${constants.navTimeout}ms ease-in,
      transform ${constants.navTimeout}ms ease-in;

    min-height: ${
      height < theme.constants.minContainerHeight
        ? theme.constants.minContainerHeight
        : height
    }px;

    max-height: ${
      height < theme.constants.minContainerHeight
        ? theme.constants.minContainerHeight
        : height
    }px;
  }

  && main.transition-enter-done {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transition: opacity ${constants.navTimeout}ms ease-out,
    transform ${constants.navTimeout}ms ease-out;
  }

  ${theme.breakpoints.down("lg")} {
    padding-left: 12px;
    padding-right: 12px;
  }
`}
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
      height={mainContainerHeight}
      {...rest}
    >
      <NavHeaderLayout
        articlesData={articlesData}
        activeArticleIndex={childTransition ? activeArticleIndex : null}
        handleClick={handleNavClick}
        fontSize={{ xs: "3rem", md: "4rem" }}
        color="text.main"
      />
      {/* CSSTransition adds classnames to components based on their state */}
      <CSSTransition
        nodeRef={mainRef}
        in={transition}
        timeout={constants.navTimeout}
        classNames="transition"
      >
        <main ref={mainRef}>
          {articlesData.map(({ Article }, index) => {
            // create a new Ref, add it to child list for tracking
            const id = index === 0 ? "initial" : null;
            childList.current[index] = createRef();

            // CSSTransition adds classnames to components based on their state
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
                {/* ref is passed to the Article (child) component, sharedClass keeps container in sync */}
                {/* pass onclick function to hero (here, index 0) article  */}
                {/* with next index in array (here, index 1) */}
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
      <BackDrop />
      <Footer />
    </DimensionsContainer>
  );
};

export { AppLayout };
