import { AppLayout } from "../src/layout";
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
  {
    Article: HeroArticle,
    Icon: navButtons[navConstants.home],
  },
  {
    Article: WorkArticle,
    Icon: navButtons[navConstants.work],
  },
  {
    Article: ContactArticle,
    Icon: navButtons[navConstants.contact],
  },
  {
    Article: ExternalArticle,
    Icon: navButtons[navConstants.external],
  },
];

const Index = () => {
  return <AppLayout articlesData={articlesData} />;
};

export default Index;
