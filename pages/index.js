import { useRef } from "react";
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
  { Article: HeroArticle, Icon: navButtons[navConstants.home] },
  { Article: WorkArticle, Icon: navButtons[navConstants.work] },
  { Article: ContactArticle, Icon: navButtons[navConstants.contact] },
  { Article: ExternalArticle, Icon: navButtons[navConstants.external] },
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
        fontSize="4rem"
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
            childList.current[index] = useRef();

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
                  id={id}
                  component="article"
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

/* 
const mainRef = createRef(undefined);
const previousActive = createRef(undefined);
const newIndex = createRef(0);

const childList = useRef([]);
  const [activeArticleIndex, setActiveArticleIndex] = useState(undefined);
  const [mainContainerHeight, setMainHeight] = useState(undefined);
  const [transition, setTransition] = useState(false);
  const [childTransition, setChildTransition] = useState(false);

  const removeAllListeners = () => {
    // remove listeners
    mainRef.current.removeEventListener("transitionend", handleResizeDone);
    previousActive.current.removeEventListener(
      "transitionend",
      handleChildExited
    );
    mainRef.current.removeEventListener("transitionend", handleResizeDone);
  };
  //
  const handleResizeDone = () => {
    console.log("handleResizeDone");
    removeAllListeners();

    setActiveArticleIndex(newIndex.current);
    setChildTransition(true);
  };
  //
  const handleResize = () => {
    console.log("handleResize");
    removeAllListeners();
    mainRef.current.addEventListener("transitionend", handleResizeDone);

    const { offsetHeight } = childList.current[newIndex.current].current;
    setMainHeight(offsetHeight);
  };
  //
  const handleChildExited = () => {
    console.log("handleChildExited");
    removeAllListeners();

    mainRef.current.addEventListener("transitionend", handleResizeDone);
    handleResize();
  };
  //
  const handleNavClick = (index) => {
    console.log("handleNavClick");
    previousActive.current = childList.current[newIndex.current].current;
    previousActive.current.addEventListener("transitionend", handleChildExited);

    newIndex.current = index;
    setChildTransition(false);
  };
  //
  // initial setup
  useEffect(() => {
    mainRef.current.addEventListener("transitionend", handleResizeDone);
    previousActive.current = childList.current[0].current;
    const { offsetHeight } = previousActive.current;
    newIndex.current = 0;

    setMainHeight(offsetHeight);
    setTransition(true);
  }, []);

*/
