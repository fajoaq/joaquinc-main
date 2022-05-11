import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";

// constants are used to keep composed arrays in sync
// with other data.
const navConstants = {
  home: 0,
  work: 1,
  blog: 2,
  contact: 3,
  github: 4,
};

const navButtons = [HomeIcon, FolderIcon, ForumIcon, EmailIcon, GitHubIcon];

export { navButtons, navConstants };
