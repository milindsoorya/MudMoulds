import { Card } from "react-bootstrap";
import styles from "./Heading.module.scss";

function Heading({ title,text }) {
  return (
    <Card className="align-items-center" border="transparent">
        <Card.Body className="text-center">
        <Card.Title className={styles.title}>{title}</Card.Title>
        <hr className={styles.hLine} />
        <Card.Text className={styles.text}>
        {text}
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default Heading;
