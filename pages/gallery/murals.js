import { Container } from "react-bootstrap";
import Heading from "../../components/Heading";
import MasonryView from "../../components/MasonryView";

import { MuralsArray } from "../../components/Images";

function Murals() {
  return (
    <Container className="container">
      <Heading
        title="MURALS & WALL ARTS"
        text="Murals create a tangible sense of place, destination,
          resulting in increased foot traffic while adding color, vibrancy and character
          to urban environment. Murals contrast the negative mental health effects of concrete
          and asphalt and can have therapeutic benefits for mentallyill populations. Our distinguishing
          characteristic of mural and wall arts is that the architectural elements of given space are
          harmoniously incorporated in to picture. We provide a soothing optimism in your residing space
          with our artistic touch."
      />
      <MasonryView image={MuralsArray} />
      <style jsx>{`
        .container {
          margin: 50px 0px;
        }
      `}</style>
    </Container>
  );
}

export default Murals;
