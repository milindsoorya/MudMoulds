import CardGroup from "../components/CardGroup";
import ImageCard from "../components/ImageCard";
import LatestArtifacts from "../components/LatestArtifacts";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <CardGroup />
      <ImageCard />
      <LatestArtifacts />
    </div>
  );
}
