import Heading from "../../components/Heading";
import ImageLeftCard from "../../components/ImageLeftCard";
import ImageRightCard from "../../components/ImageRightCard";
import styles from "./gallery.module.scss";
import LatestArtifacts from "../../components/LatestArtifacts";
function Gallery() {
  return (
    <div className={styles.container}>
      <Heading
        title="Explore the collection"
        text="Most of us have a treasured collection at some point of our lives. For all the fans of artifacts out there, explore the diversities of how the pure mud could be casted into magnificence. Give ample space on your vintage cupboard to arrange our rich artifacts and renovate your dream homes with our pretty decors. It’s high time to replace the unscientific culinary tools with pure, dressed, finished, dense and solely handmade Mudmoulds."
      />

      <ImageLeftCard
        image="/images/galleryMurals.png"
        title="MURALS & WALL ARTS"
        description="Murals create a tangible sense of place, destination, resulting in increased foot traffic while adding color, vibrancy and character to
        urban environment. Murals contrast the negative mental health effects of concrete and asphalt and can have therapeutic benefits for mentallyill populations. Our distinguishing characteristic of mural and wall arts is that the architectural elements of given space are harmoniously incorporated in to picture. We provide a soothing optimism in your residing space with our artistic touch."
        link="/gallery/murals"
      />
      <ImageRightCard
        image="/images/galleryInteriorDecor.png"
        title="INTERIOR DECORS"
        description="Mudmoulds not only has the hands of our artist but also, our souls too get mixed with the moulding clay. With the intricate designs and wide array of patterns, decorating homes with art of clay has become quite a big mania in modern society. Handmade mudmoulds adds an element of groundedness to a living space. We offer a diverse range of options to choose from, and decorating, you are able to customize your look and make your interior as personal as possible."
        link="/gallery/interiorDecors"
      />
      <ImageLeftCard
        image="/images/galleryGardenDecor.png"
        title="GARDEN DECORS"
        description="Gardening is no more a hobby, but it is a restorative work in building oneself. The endangered species of plants can no more cope with conventional mud pots, Mudmoulds favors you with the making of outdoor garden and indoor plants unique and in adding a tint of luxury and royalty. Explore the novel ideas in garden decorations and own your bespoke mudmould in just a ring."
        link="/gallery/gardenDecors"
      />
      <ImageRightCard
        image="/images/galleryCullinaryTools.png"
        title="CULINARY TOOLS"
        description="The arena of cooking underwent many explorations and people are pretty much aware about the healthy food style. Here we present you the culinary tools with healing aids. Adding feather to the crown our culinary tools are durable, fine, free from chemical and completely organic and handmade with love and care. We care for your health and never would like to compromise the well being of next generation with chemicals oozing out from aluminium and plastic containers."
        link="/gallery/culinaryTools"
      />
      <LatestArtifacts />
    </div>
  );
}

export default Gallery;
