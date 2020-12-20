import { Container } from "react-bootstrap";
import styles from "./Contact.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaRegMap, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FiGlobe, FiPhone } from "react-icons/fi";
import CustomButton from "../../components/CustomButton";

function Contact() {
  return (
    <div>
      <Container>
        <div className={styles.headerContainer}>
          <h6 className={styles.headerTitle}>Learn & grow together</h6>
          <hr className={styles.hLineSm} />    
          <span>
            Knowledge increases by sharing but not by saving. Mudmoulds extend
            our artistic hands to shape the hands of rising talents too. We are
            fortunate to accept collaborations and happy to share our art
            through workshops and exhibitions. Mudmoulds are also interested in
            all kinds of collaborations to stretch the wings of Mudmoulds.
          </span>
        </div>

        <div className={styles.formDiv}>
          <div className={styles.form}>
            <Form>
              <h6 className={styles.headerTitle}>
                WE WOULD LOVE TO HEAR FROM YOU !
                <hr className={styles.hLineSm} />    
              </h6>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Your Email </Form.Label>
                <Form.Control type="email" placeholder="Your Email " />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <CustomButton text={"Sent Message"} icon={<FaTelegramPlane />} />
            </Form>
          </div>

          <div className={styles.formGetInTouch}>
            <h6 className={styles.headerTitle}>
              LETS GET IN TOUCH
              <hr className={styles.hLineSm} />    
            </h6>
            <div className={styles.linksContainer}>
              <FaRegMap className={styles.icons} />
              <h6>
                Anaswaram clay pottery, Aruvackode, Nilambur (P.O), Malappuram,
                Kerala
              </h6>
            </div>
            <div className={styles.linksContainer}>
              <FiPhone className={styles.icons} />
              <h6>
                +91 9778375095 <img src="images/whatsappLogo.png" /> <br />
                +91 7090077369
              </h6>
            </div>
            <div className={styles.linksContainer}>
              <MdMailOutline className={styles.icons} />
              <h6>mudmoulds@gmail.com</h6>
            </div>
            <div className={styles.linksContainer}>
              <FiGlobe className={styles.icons} />
              <h6>mudmoulds@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className={styles.headerContainer}>
          <h6 className="headerTitle">
            Get your Artifact Today !
            <hr className={styles.hLineSm} />    
          </h6>
           
          <span>
            Folks, What are you waiting for? It's high time to change! You can
            now own your desired artifact by just a ring to Mudmoulds directly
            or you can collect the products via Dhanya supermarket. So grab your
            Mudmoulds asap and make your homespace unique and angelic. Be the
            change that you want to see in the world.
          </span>
        </div>
        <div className={styles.headerContainer}>
          <img src="/images/dhanya.png" />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
