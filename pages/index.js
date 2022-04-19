import { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import { NavHeaderLayout } from "../src/layout";
import { HeroArticle, WorkArticle } from "../src/pages";

const Articles = [HeroArticle, WorkArticle];
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

const StyledFlexColumn = styled("div")`
  display: grid;
  flex-direction: column;
`;

const removeFunc = () => {
  const els = document.querySelectorAll(".active-child");

  for (let i = 0; i < els.length; i++) {
    els[i].classList.remove("active-child", "transition");
  }
};

const Index = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const handleNavClick = (index) => {
    if (index === activeNavIndex) return;

    const transitionParent = document.querySelector(
      ".active-child.main-transition"
    );
    const handleTransitionEnd = () => {
      transitionParent.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
      setActiveNavIndex(index);
    };

    transitionParent.addEventListener("transitionend", handleTransitionEnd);
    removeFunc();
  };
  return (
    <Fragment>
      <NavHeaderLayout
        navButtons={navButtons}
        activeNavIndex={activeNavIndex}
        handleClick={handleNavClick}
        fontSize="4rem"
        color="text.main"
      />

      <StyledFlexColumn>
        {Articles.map((Article, index) => (
          <Article
            key={`main-article-${index}`}
            id={index == activeNavIndex ? "active" : ""}
          />
        ))}
      </StyledFlexColumn>
    </Fragment>
  );
};

export default Index;
