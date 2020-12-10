import { Container } from 'react-bootstrap';
import MasonryView from '../../components/MasonryView';
import SlideShow from '../../components/SlideShow';
function Gallery() {
  return (
    <>
      <SlideShow/>
    <Container>
      <div className="headerContainer">
        <h6 className="headerTitle">MURALS & WALL ARTS</h6>
          <span>Murals create a tangible sense of place, destination,
          resulting in increased foot traffic while adding color, vibrancy and character
          to urban environment. Murals contrast the negative mental health effects of concrete
          and asphalt and can have therapeutic benefits for mentallyill populations. Our distinguishing
          characteristic of mural and wall arts is that the architectural elements of given space are
          harmoniously incorporated in to picture. We provide a soothing optimism in your residing space
          with our artistic touch.</span>
      </div>
      <MasonryView />
      </Container>
    </>
  );
}

export default Gallery;
