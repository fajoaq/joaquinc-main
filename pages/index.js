import { Fragment, useEffect, useState, createRef, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import { AppLayout } from "../src/layout";
import { NavHeaderLayout } from "../src/layout";
import { HeroArticle } from "../src/pages";

const text = `
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
`;

const Articles = [HeroArticle, HeroArticle, HeroArticle, HeroArticle];

const navButtons = [
  {
    Icon: HomeIcon,
  },
  {
    Icon: FolderIcon,
  },
  {
    Icon: EmailIcon,
  },
  {
    Icon: GitHubIcon,
  },
];

const StyledFlexColumn = styled(Box)`
  display: grid;
  flex-direction: column;
`;

const StyledAppLayout = styled(AppLayout)`
  && .transition-enter {
    min-height: ${({ theme }) => theme.constants.mainContainerHeight}px;
    max-height: ${({ theme }) => theme.constants.mainContainerHeight}px;
  }

  && .transition-enter-done {
    min-height: ${({ theme, heights }) =>
      heights == undefined ? theme.constants.mainContainerHeight : heights}px;

    max-height: ${({ theme, heights }) =>
      heights == undefined ? theme.constants.mainContainerHeight : heights}px;
  }
`;
const mainRef = createRef(undefined);

const Index = () => {
  const nodeList = useRef([]);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [mainContainerHeight, setMainHeight] = useState(undefined);
  const [transition, setTransition] = useState(false);

  const handleNavClick = (index) => {
    const { offsetHeight } = nodeList.current[index].current;
    setMainHeight(offsetHeight);
    setActiveNavIndex(index);
  };

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <StyledAppLayout heights={mainContainerHeight}>
      <NavHeaderLayout
        navButtons={navButtons}
        activeNavIndex={activeNavIndex}
        handleClick={handleNavClick}
        fontSize="4rem"
        color="text.main"
      />
      <CSSTransition
        nodeRef={mainRef}
        in={transition}
        timeout={200}
        classNames="transition"
      >
        <StyledFlexColumn component="main" ref={mainRef}>
          {Articles.map((Article, index) => {
            nodeList.current[index] = useRef();

            if (index === 1 || index === 3) {
              let paragraphs = [];
              for (let i = 0; i < index + 2; i++)
                paragraphs.push(() => <p>{text}</p>);
              return (
                <Article
                  ref={nodeList.current[index]}
                  key={`main-article-${index}`}
                  id="initial"
                  component="article"
                  transition={activeNavIndex === index ? transition : false}
                >
                  {paragraphs.map((P, index) => (
                    <P key={`paragraph-${index}`} />
                  ))}
                </Article>
              );
            }

            return (
              <Article
                ref={nodeList.current[index]}
                key={`main-article-${index}`}
                id="initial"
                component="article"
                transition={activeNavIndex === index ? transition : false}
              />
            );
          })}
        </StyledFlexColumn>
      </CSSTransition>
    </StyledAppLayout>
  );
};

export default Index;
