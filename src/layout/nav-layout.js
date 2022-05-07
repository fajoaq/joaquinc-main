import { useRouter } from "next/dist/client/router";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { navButtons, navConstants } from "../components/nav-buttons.component";
import { TRANSITION_CLASS, constants } from "../constants/constants";
import { RenderThrottle } from "../components/wrapper/render-throttle.component";
import { useTransitions } from "../../src/hooks/useTransitions";
import { useTransitionState } from "../context/transition.context";
import { matchNameToRoute } from "../utils/matchNameToRoute";

const Header = styled(Grid)`
  ${({ theme }) => `
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  & a:hover {
    color: ${theme.palette.tertiary.main};
    transition: color ${constants.buttonHover}ms ease-in-out;
  }
  & a:active:hover {
    color: ${theme.palette.secondary.main};
    transition: color ${constants.buttonHover}ms ease-in-out;
  }

  & a:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 20%;
    bottom: 0em;
    margin-right: -0.5em;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    border-bottom: 0 solid transparent;
    transition: border-bottom ${constants.navTimeout}ms ease-in-out;
  }

  & a.active {
    color: ${theme.palette.background.light};
  }

  & a.active:after {
    border-bottom: 30px solid ${theme.palette.background.main};
  }

  & a.active.icon-home, a.active.icon-0 {
    color: ${theme.palette.primary.main};
  }
  & a.active.icon-home:after, a.active.icon-0:after {
    border-bottom: 30px solid ${theme.palette.primary.main};
  }

  ${theme.breakpoints.down("sm")} {
    && a:after {
      left: 15%;
    }
  }
`}
`;
//
// work page link is also the blog page link
// TBD create a smaller blog page icon link above work page link
const navLinks = [
  {
    name: "home",
    href: "/",
    Icon: navButtons[navConstants.home],
    "aria-label": "Home.",
  },
  {
    name: "work blog",
    href: "/work",
    Icon: navButtons[navConstants.work],
    "aria-label": "Francis' work.",
  },
  {
    name: "contact",
    href: "/contact",
    Icon: navButtons[navConstants.contact],
    "aria-label": "Contact Francis.",
  },
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
      position="relative"
      padding={3}
      role="button"
      {...data}
      {...rest}
    >
      <Icon fontSize="inherit" />
    </Grid>
  );
};

const NavLayout = ({ navigate, ...rest }) => {
  const router = useRouter();
  const [handleClick] = useTransitions(); // transition states initialization, call once
  const [transitionState] = useTransitionState();

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
        {navLinks.map((navIconData) => (
          <Icon
            key={`nav-item-${navIconData.name}`}
            className={
              transitionState.contentTransition === TRANSITION_CLASS.entered
                ? matchNameToRoute(navIconData.name, navIconData.href)
                  ? `icon-${navIconData.name} active`
                  : ""
                : `icon-${navIconData.name}`
            }
            handleNavClick={handleNavClick}
            navIconData={navIconData}
          />
        ))}
        <Icon
          key={`nav-item-${githubLinkData.name}`}
          navIconData={githubLinkData}
        />
      </Header>
    </RenderThrottle>
  );
};

export { NavLayout };
