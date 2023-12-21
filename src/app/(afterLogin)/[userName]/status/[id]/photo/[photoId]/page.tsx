import Home from "@/app/(afterLogin)/home/page";

import styles from "./TweetDetailModalPage.module.css";

type Props = {
  params: { username: string; id: string; photoId: string };
};

const TweetDetailModalPage = ({ params }: Props) => {
  return <Home />;
};

export default TweetDetailModalPage;
