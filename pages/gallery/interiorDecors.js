import { Container } from "react-bootstrap";
import Heading from "../../components/Heading";
import MasonryView from "../../components/MasonryView";
import { interiorDecorsArray } from "../../components/Images";

function InteriorDecors() {
  return (
    <Container className="container">
      <Heading
        title="INTERIOR DECORS"
        text="Mudmoulds not only has the hands of our artist but also, our souls too get mixed with the moulding clay. With the intricate designs and wide array of patterns, decorating homes with art of clay has become quite a big mania in modern society. Handmade mudmoulds adds an element of groundedness to a living space. We offer a diverse range of options to choose from, and decorating, you are able to customize your look and make your interior as personal as possible."
      />
      <MasonryView image={interiorDecorsArray} />
      <style jsx>{`
        .container {
          margin: 50px 0px;
        }
      `}</style>
    </Container>
  );
}

export default InteriorDecors;
