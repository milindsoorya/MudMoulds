import styles from "./Footer.module.scss";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className="navbar navbar-inverse navbar-fixed-bottom">
        <div className={styles.container}>
                  
          <div className={styles.text}>
            <Card.Title>SUBSCRIBE TO OUR NEWSLETTER</Card.Title>
            <hr className={styles.hLineSm} />       
            <p>
              Be the first to know about our new projects and events, be a part
              of this journey. Subscribe your email address to recieve news and
              updates.
            </p>
          </div>
          <div className={styles.emailButton}>
            <InputGroup className="mb-2 ">
              <FormControl
                placeholder="Enter your Email Address"
                aria-label="Enter your Email Address"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary rounded-0">Subscribe</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <hr className={styles.hLineLg} />   
        </div>
      </div>
      <div className={styles.socialMediaDiv}>
        <Link href="/">
          <a>
            <FaFacebookF className={styles.socialMedia} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <FaInstagram className={styles.socialMedia} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <FaYoutube className={styles.socialMedia} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
