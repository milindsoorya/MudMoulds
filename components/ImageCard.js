import styles from "./ImageCard.module.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

 
function ImageCard({title,text,image,reverse}) {
 
  return (
      <Card className={reverse?styles.cardStyleReverse:styles.cardStyle}>
          <Card.Img
            variant="top"
            src={image}
            className={styles.cardImg}
            fluid
          />
          <Card.Body className={styles.cardBody}>
          <Card.Title>{title}</Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant="primary">View more</Button>
          </Card.Body>
      </Card>
  );
}

export default ImageCard;
