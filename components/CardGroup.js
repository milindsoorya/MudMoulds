import Link from "next/link";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import styles from "./CardGroup.module.scss";

function CardGroup() {
  return (
    <div>
      <CardDeck className="m-4">
        <Card className="align-items-center" border="transparent">
          <Card.Img
            variant="top"
            src="./images/cardgroup/abtArtifacts.png"
            className={styles.cardImg}
          />
          <Card.Body className="text-center">
            <Card.Title>ABOUT MUDMOULDS ARTIFACTS</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              The growth of artifacts from past to present scenario is worth
              appreciable, that the diversity of moulding mud into artifacts is
              broadening unbounded. We adhere to this ‘mantra’ and are glad that
              we could break the conventions and pull of the vogue in pottery.
              Mudmoulds is a kick start to switch human life from toxicity to
              therapy.
            </Card.Text>
            <Link href="/about">
              <a className={styles.viewMore}>View More.</a>
            </Link>
          </Card.Body>
        </Card>
        <Card className="align-items-center" border="transparent">
          <Card.Img
            variant="top"
            src="./images/cardgroup/abtFoundation.png"
            className={styles.cardImg}
          />
          <Card.Body className="text-center">
            <Card.Title>ABOUT THE FOUNDATION</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              The roots of mud moulds are the angelic and societal passion of
              about 500 families of “kumbara” community in pottery. Our
              foundress has an experience over 21 years in field of pottery and
              the immense enthusiasm in the artistry of moulding mud into
              mastery led to entrepreneurial genesis of ‘Anaswaram’ 10 years
              ago.
            </Card.Text>
            <Link href="/about">
              <a className={styles.viewMore}>View More.</a>
            </Link>
          </Card.Body>
        </Card>
        <Card className="align-items-center" border="transparent">
          <Card.Img
            variant="top"
            src="./images/cardgroup/abtPractices.png"
            className={styles.cardImg}
          />
          <Card.Body className="text-center">
            <Card.Title>WORK CULTURE & PRACTICES</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              Mudmoulds inherits a work culture of ages in mud moulding and
              extend the gravity of this art form to furnish the deeds of pure
              clay. Mudmoulds utilize the richness of pure clay with fine sand
              straight away from Nilambur river basins to cast rich artifacts
              without the ostentations of artificial chemicals and toxins.
            </Card.Text>
            <Link href="/about">
              <a className={styles.viewMore}>View More.</a>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default CardGroup;
