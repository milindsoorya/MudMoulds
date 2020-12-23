import styles from "./ImageLeftCard.module.scss";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function ImageLeftCard({ image, title, description, link }) {
  return (
    <div>
      <CardGroup>
        <Card className={styles.cardStyle}>
          <Card.Img
            variant="top"
            src={`${image}`}
            className={styles.cardImg}
            fluid="true"
          />
          <Card.Body className={styles.cardBody}>
            <Card.Title>{`${title}`}</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>{`${description}`}</Card.Text>
            <Link href={`${link}`}>
              <Button variant="primary">View more</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ImageLeftCard;
