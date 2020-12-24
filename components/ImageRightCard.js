import styles from "./ImageRightCard.module.scss";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function ImageRightCard({ image, title, description, link }) {
  return (
    <div>
      <CardGroup>
        <Card className={styles.cardStyle}>
          <Card.Body className={styles.cardBody}>
            <Card.Title>{`${title}`}</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>{`${description}`}</Card.Text>
            <Link href={`${link}`}>
              <Button variant="primary">View more</Button>
            </Link>
          </Card.Body>
          <Card.Img
            variant="top"
            src={`${image}`}
            className={styles.cardImg}
            fluid="true"
          />
        </Card>
      </CardGroup>
    </div>
  );
}

export default ImageRightCard;
