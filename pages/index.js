import CardGroup from "../components/CardGroup";
import ImageCard from "../components/ImageCard";
import LatestArtifacts from "../components/LatestArtifacts";

export default function Home() {
  return (
    <div>
      <CardGroup />
      <ImageCard title="WORKSHOPS & EVENTS"
        text="Mudmoulds in the name of “Anaswaram” has conducted handful of
                workshops over the past years. It is a privilege that we have
                been a part of numerous events spreading our soul of artistry
                and entitled for achievements and participation in prominent
                cultural and social events. Mudmoulds knew that no small piece
                of knowledge is trivial and this shaped us in getting attracted
                to superior workshops across the country. Mudmoulds loves to
                scream that we are swimming forward in the ocean of art in the
                view that art is limitless."
        image={"images/imagecard/imgCard1.png"}
      />
      <ImageCard title="PRACTICES & EVENTS"
        text="The mastery in pottery by multitude of beautiful hands could
              expand the knowledge in this sacred art and thereby unleash the
              substandard culinary into healing culinary practice. Mudmoulds
              always appreciate and hearten artisans in spreading our work
              culture and developing skills by collaborations. We have always
              been welcoming new hands to mould pure mud to rich and
              idiosyncratic artifacts. Experience the essence of clay and you
              would love this quintessential spirit of mother, Earth to make
              well of yourselves and others."
        image={"images/imagecard/imgCard2.png"}
        reverse={true}
      />
      <LatestArtifacts />
    </div>
  );
}
