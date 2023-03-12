import { useRouter } from "next/dist/client/router";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { navButtons, navConstants } from "../components/nav-buttons.component";
import { TRANSITION_CLASS, constants } from "../constants/constants";
import { RenderThrottle } from "../components/wrapper/render-throttle.component";
import { useTransitions } from "../../src/hooks/useTransitions";
import { useTransitionState } from "../context/transition.context";
import { matchIconColumnToRoute } from "../utils/matchNavColumnToRoute";
import { getPathName } from "../utils/getPathName";

const Header = styled(Grid)`
  ${({ theme }) => `
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: end;
  font-size: 3.5rem;

  & .icon {
    position: relative;
  }

  & a {
    display: flex;
    justify-content: center;
    color: ${theme.palette.text.navLink};
    padding: 0;
    margin: 0;
  }

  & .icon a:hover {
    color: ${theme.palette.tertiary.main};
    transition: color ${constants.buttonHover}ms ease-in-out;
  }
  & .icon a:active:hover {
    color: ${theme.palette.secondary.main};
    transition: color ${constants.buttonHover}ms ease-in-out;
  }

  & .icon:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0rem;
    left: 0.1rem;
    margin-right: -0.5em;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    border-bottom: 0 solid transparent;
    transition: border-bottom ${constants.navTimeout}ms ease-in-out;
    pointer-events: none;
  }

  & .icon.active:after {
    border-bottom: 30px solid ${theme.palette.background.main};
  }

  && .icon.active a.active {
    font-size: 4rem;
    color: ${theme.palette.background.light};
    transition: font-size ${constants.navTimeout}ms ease-in-out;
  }
  && .icon.active.icon-column-0 a {
    color: ${theme.palette.primary.main};
  }
  & .icon.active.icon-column-0:after {
    border-bottom: 30px solid ${theme.palette.primary.main};
  }

  && .icon-column-1 div:first-of-type a {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
  && .icon-column-1.active a:not(.active) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 3rem;

    && .icon.active a.active {
      font-size: 3.3rem;
    }

    && .icon:after {
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid transparent;
    }

    & .icon.active:after {
      border-bottom: 20px solid ${theme.palette.background.main};
    }

    & .icon.active.icon-column-0:after {
      border-bottom: 20px solid ${theme.palette.primary.main};
    }

    && .icon:after {
      left: 0.4rem;
    }

    && .icon-column-1.active a:not(.active) {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    && .icon-column-1 div:first-of-type a {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }
  }
`}
`;

const IconColumnWrapper = styled(Grid)`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    margin-left: ${theme.spacing(constants.spacing.small)};
    margin-right: ${theme.spacing(constants.spacing.small)};
    padding-bottom: ${theme.spacing(constants.spacing.medium)};

    ${theme.breakpoints.down("sm")} {
      padding-bottom: ${theme.spacing(constants.spacing.small)};
    }
  `}
`;

//
// work page link is also the blog page link
const navLinks = [
  [
    {
      name: "home",
      href: "/",
      Icon: navButtons[navConstants.home],
      "aria-label": "Home.",
    },
  ],
  [
    {
      name: "blog",
      href: "/blog",
      Icon: navButtons[navConstants.blog],
      "aria-label": "Francis' work.",
    },
    {
      name: "work",
      href: "/work",
      Icon: navButtons[navConstants.work],
      "aria-label": "Francis' work.",
    },
  ],
  [
    {
      name: "contact",
      href: "/contact",
      Icon: navButtons[navConstants.contact],
      "aria-label": "Contact Francis.",
    },
  ],
];

const githubLinkData = {
  name: "github",
  href: "https://github.com/fajoaq",
  Icon: navButtons[navConstants.github],
  "aria-label": "Learn more about Francis on Github.",
  rel: "noopener noreferrer",
  target: "_blank",
};

const Icon = ({ handleNavClick, navIconData: { Icon, ...data }, ...rest }) => {
  return (
    <Grid
      onClick={handleNavClick || null}
      item
      component="a"
      padding={3}
      role="button"
      {...data}
      {...rest}
    >
      <Icon fontSize="inherit" />
    </Grid>
  );
};

const IconColumn = ({ click, navIconData, path, ...rest }) => {
  const [transitionState] = useTransitionState();

  return (
    <Grid
      key={navIconData.name}
      item
      order={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? navIconData.name == path
            ? 2
            : 1
          : 1
      }
      {...rest}
    >
      <Icon
        handleNavClick={click}
        navIconData={navIconData}
        className={
          transitionState.contentTransition === TRANSITION_CLASS.entered
            ? navIconData.name == path
              ? `icon-${navIconData.name} active`
              : ""
            : `icon-${navIconData.name}`
        }
        id={
          navIconData.name == "blog"
            ? "blog-icon"
            : navIconData.name == "work"
            ? "work-icon"
            : ""
        }
      />
    </Grid>
  );
};

const Nav = ({ onClick, pathName, ...rest }) => {
  const [transitionState] = useTransitionState();

  return navLinks.map((iconArr, index) => (
    <IconColumnWrapper
      key={`nav-item-${index}`}
      container
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? matchIconColumnToRoute(iconArr, pathName)
            ? `icon icon-column-${index} active`
            : `icon icon-column-${index}`
          : `icon icon-column-${index}`
      }
      {...rest}
    >
      {iconArr.map((navIconData) => (
        <IconColumn
          key={`nav-icon-${navIconData.name}`}
          navIconData={navIconData}
          click={onClick}
          path={pathName}
        />
      ))}
    </IconColumnWrapper>
  ));
};

const NavLayout = ({ navigate, ...rest }) => {
  const router = useRouter();
  const [handleClick] = useTransitions(); // transition states initialization, call once
  const [transitionState] = useTransitionState();

  let pathName = getPathName(router.route.slice(1));

  const handleNavClick = (e) => {
    e.preventDefault();

    const newUrl = e.currentTarget.href;
    const url = window.location.href;

    // clicked the same nav button ?
    if (newUrl == url) return;

    router.prefetch(newUrl);
    handleClick(newUrl);
  };

  return (
    <RenderThrottle
      trigger={transitionState.contentTransition === TRANSITION_CLASS.entered}
    >
      <Header
        className={
          transitionState.contentTransition === TRANSITION_CLASS.entered
            ? "active"
            : ""
        }
        id="main-nav"
        container
        component="nav"
        aria-label="Main Navigation."
        {...rest}
      >
        <Nav onClick={handleNavClick} pathName={pathName} />
        {/* github has just 1 icon- external link */}
        <IconColumnWrapper className="icon">
          <Icon
            key={`nav-item-${githubLinkData.name}`}
            navIconData={githubLinkData}
          />
        </IconColumnWrapper>
      </Header>
    </RenderThrottle>
  );
};

export { NavLayout };
