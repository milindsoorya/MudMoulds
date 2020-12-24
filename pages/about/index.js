import ImageCard from "../../components/ImageCard";
import styles from "./About.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { NextSeo } from "next-seo";

function About() {
  const SEO = {
    title: "About Mudmoulds",
    description:
      "Mudmoulds is the new face of ‘anaswaram’ and the outset of Mudmoulds is in the view to elaborate the network of Nilambur potteries, to achieve a position in many homes. We make culinary tools which are completely made naturally, unblended with chemicals and pollutants in this era of food poisoned from Aluminium , non stick utensils. We incorporate the boon of nature, clay to mould bespoke products. Around 150 varieties of culinary tools which can be used on microwave and stove are produced by our team.",

    openGraph: {
      title: "About Mudmoulds",
      description:
        "Mudmoulds is the new face of ‘anaswaram’ and the outset of Mudmoulds is in the view to elaborate the network of Nilambur potteries, to achieve a position in many homes. We make culinary tools which are completely made naturally, unblended with chemicals and pollutants in this era of food poisoned from Aluminium , non stick utensils. We incorporate the boon of nature, clay to mould bespoke products. Around 150 varieties of culinary tools which can be used on microwave and stove are produced by our team.",
    },
  };
  return (
    <div>
      <NextSeo {...SEO} />
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
            src="images/vijayaKumari.png"
            className={styles.heroCardImg}
            fluid="true"
          />
          <Card.Body className={styles.heroCardBody}>
            <Card.Title>
              <h6>Woman with Wings</h6>
              Vijaya Kumari
            </Card.Title>
            <hr className={styles.hLine} />
            <Card.Text>
              Vijaya Kumari, our foundress manifested her interest in pottery at
              a very young age. In focused curiosity, she found herself happy in
              this art, which later turned out to be a passion and made her the
              expert in her craft. Her determination and belief in this divine
              artistry led to the path finding decision to introduce the almost
              extinct Nilambur potteries in the name of ‘Anaswaram’. It is the
              sweat of this diligent woman for past 10 years spread the
              fragrance of brand new ‘Mudmoulds’ with a great team behind. “The
              reason to get the ball rolling Mudmoulds is to engage more kind
              hearts in to this province of pottery and murals. Also to offer a
              return ticket to natural produces and it’s peaceful outcomes to
              the society”, says our foundress.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <div className={styles.teamContainer}>
        <h6 className={styles.headerTitle}>Meet the Team</h6>
        <hr className={styles.hLineSm} />    
        <CardDeck>
          <Card className={styles.cardStyle}>
            <Card.Img
              variant="top"
              src="images/team/susheela.png"
              className={styles.teamImg}
              fluid="true"
            />
            <Card.Body className="text-center">
              <Card.Title>
                Susheela<h6 className={styles.titleSmall}>Artisan</h6>
              </Card.Title>

              <hr className={styles.hLineSm} />

              <Card.Text>
                The young talent of our team who finds glory in her ability
                never fails to develop her own creativity. She seeks contentment
                in sharing her skills to ones who solicit.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.cardStyle}>
            <Card.Img
              variant="top"
              src="images/team/raviKumar.png"
              className={styles.teamImg}
              fluid="true"
            />
            <Card.Body className="text-center">
              <Card.Title>
                Ravi Kumar<h6 className={styles.titleSmall}>Artisan</h6>
              </Card.Title>
              <hr className={styles.hLineSm} />

              <Card.Text>
                Another artist of Mudmoulds creates amazing decors and pots in
                his potter’s wheel. His expertise to the craft makes the
                Mudmoulds products unique and handy.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.cardStyle}>
            <Card.Img
              variant="top"
              src="images/team/akhil.png"
              className={styles.teamImg}
              fluid="true"
            />
            <Card.Body className="text-center">
              <Card.Title>
                Akhil<h6 className={styles.titleSmall}>Marketing</h6>
              </Card.Title>
              <hr className={styles.hLineSm} />

              <Card.Text>
                The man behind the introduction of brand new Mudmoulds to extend
                these unique artifact to larger sphere.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default About;
