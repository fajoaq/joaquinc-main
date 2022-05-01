import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";

// constants are used to keep composed arrays in sync
// with other data. the blog article replaces the work article
const navConstants = {
  home: 0,
  work: 1,
  contact: 2,
  blog: 1,
};

const navButtons = [HomeIcon, FolderIcon, EmailIcon];

export { navButtons, navConstants };
