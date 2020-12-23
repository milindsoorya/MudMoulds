import { Container } from "react-bootstrap";
import Heading from "../../components/Heading";
import MasonryView from "../../components/MasonryView";
import { CulinaryToolsArray } from "../../components/Images";

function CulinaryTools() {
  return (
    <Container className="container">
      <Heading
        title="CULINARY TOOLS"
        text="The arena of cooking underwent many explorations and people are pretty much aware about the healthy food style. Here we present you the culinary tools with healing aids. Adding feather to the crown our culinary tools are durable, fine, free from chemical and completely organic and handmade with love and care. We care for your health and never would like to compromise the well being of next generation with chemicals oozing out from aluminium and plastic containers."
      />
      <MasonryView image={CulinaryToolsArray} />

      <style jsx>{`
        .container {
          margin: 50px 0px;
        }
      `}</style>
    </Container>
  );
}

export default CulinaryTools;
