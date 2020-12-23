import { Container } from "react-bootstrap";
import Heading from "../../components/Heading";
import MasonryView from "../../components/MasonryView";
import { gardenDecorsArray } from "../../components/Images";

function GardenDecors() {
  return (
    <Container className="container">
      <Heading
        title="GARDEN DECORS"
        text="Gardening is no more a hobby, but it is a restorative work in building oneself. The endangered species of plants can no more cope with conventional mud pots, Mudmoulds favors you with the making of outdoor garden and indoor plants unique and in adding a tint of luxury and royalty. Explore the novel ideas in garden decorations and own your bespoke mudmould in just a ring. "
      />
      <MasonryView image={gardenDecorsArray} />

      <style jsx>{`
        .container {
          margin: 50px 0px;
        }
      `}</style>
    </Container>
  );
}

export default GardenDecors;
