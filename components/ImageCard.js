import styles from "./ImageCard.module.scss";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function ImageCard() {
  return (
    <div>
      <CardGroup>
        <Card className={styles.cardStyle}>
          <Card.Img
            variant="top"
            src="images/imagecard/imgCard1.png"
            className={styles.cardImg}
            fluid
          />
          <Card.Body className={styles.cardBody}>
            <Card.Title>WORKSHOPS & EVENTS</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              <p>
                Mudmoulds in the name of “Anaswaram” has conducted handful of
                workshops over the past years. It is a privilege that we have
                been a part of numerous events spreading our soul of artistry
                and entitled for achievements and participation in prominent
                cultural and social events. Mudmoulds knew that no small piece
                of knowledge is trivial and this shaped us in getting attracted
                to superior workshops across the country. Mudmoulds loves to
                scream that we are swimming forward in the ocean of art in the
                view that art is limitless.
              </p>
            </Card.Text>
            <Button variant="primary">View more</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className={styles.cardStyle}>
          <Card.Body className={styles.cardBody}>
            <Card.Title>PRACTICES & EVENTS</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              The mastery in pottery by multitude of beautiful hands could
              expand the knowledge in this sacred art and thereby unleash the
              substandard culinary into healing culinary practice. Mudmoulds
              always appreciate and hearten artisans in spreading our work
              culture and developing skills by collaborations. We have always
              been welcoming new hands to mould pure mud to rich and
              idiosyncratic artifacts. Experience the essence of clay and you
              would love this quintessential spirit of mother, Earth to make
              well of yourselves and others.
            </Card.Text>
            <Button variant="primary">View more</Button>
          </Card.Body>
        </Card>
        <Card.Img
          variant="top"
          src="images/imagecard/imgCard2.png"
          className={styles.cardImg}
          fluid
        />
      </CardGroup>
    </div>
  );
}

export default ImageCard;
