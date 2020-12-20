import styles from "./Practice.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Reviews from "../../components/Reviews";
import Link from "next/link";

function Practice() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h6 className={styles.headerTitle}>About Mudmoulds</h6>
        <hr className={styles.hLineSm} />    
        <span>
          Mudmoulds is the new face of ‘anaswaram’ and the outset of Mudmoulds
          is in the view to elaborate the network of Nilambur potteries, to
          achieve a position in many homes. We make culinary tools which are
          completely made naturally, unblended with chemicals and pollutants in
          this era of food poisoned from Aluminium , non stick utensils. We
          incorporate the boon of nature, clay to mould bespoke products. Around
          150 varieties of culinary tools which can be used on microwave and
          stove are produced by our team.
        </span>
      </div>

      <CardGroup>
        <Card className={styles.heroCardStyle}>
          <Card.Img
            variant="top"
            src="images/practice.png"
            className={styles.heroCardImg}
            fluid
          />
          <Card.Body className={styles.heroCardBody}>
            <Card.Title>
              <h6>START LEARNING TODAY</h6>
              <hr className={styles.hLine} />
            </Card.Title>
            <Card.Text>
              <p>
                No day is better than today to begin with. Inform us about your
                passion in our craft and we provide you with ample opportunities
                to share our expertise. Many students from schools, colleges,
                tourists showed their curiosity in our artisanship and could
                give adequate training on their prerequisites. Mudmoulds would
                be grateful to build up a population to set the world toxic free
                and return back to nature. We are ready to frame numerous hands
                capable of mural arts and pottery.
              </p>
            </Card.Text>
            <Link href="contact">
              <Button variant="primary">Contact us</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      <div>
        <Reviews />
      </div>
    </div>
  );
}

export default Practice;
