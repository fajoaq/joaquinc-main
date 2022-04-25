import { AppLayout } from "../src/layout";
import {
  navButtons,
  navConstants,
} from "../src/components/nav-buttons.component";
import { HeroArticle, WorkArticle, ContactArticle } from "../src/layout/pages";

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
];

const Index = () => {
  return <AppLayout articlesData={articlesData} />;
};

export default Index;
