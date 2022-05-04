import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

// constants are used to keep composed arrays in sync
// with other data.
const navConstants = {
  home: 0,
  work: 1,
  contact: 2,
  github: 3,
};

const navButtons = [HomeIcon, FolderIcon, EmailIcon, GitHubIcon];

export { navButtons, navConstants };
