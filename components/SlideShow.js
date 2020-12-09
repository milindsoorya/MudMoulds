import styles from "./SlideShow.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Button from "react-bootstrap/Button";

function SlideShow({ slides }) {
  return (
    <>
      <div className={styles.container}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/hero_contact.png"
              alt="First slide"
              class="img-fluid"
            />

            <Carousel.Caption>
              <div className={styles.scrim}>
                <h3>From Pure Mud to Rich Artifacts !</h3>
                <p>
                  Pottery is the first synthetic material ever created by human.
                  The odyssey from pure mud to organic, durable, ethnic
                  artifacts through hands and souls of artists and collaborators
                  swaddle our cultural legacy and novelty hand in hand. This
                  makes pottery the master of all arts.{" "}
                </p>
                <CustomButton />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_culinary.png"
              alt="Third slide"
              class="img-fluid"
            />

            <Carousel.Caption>
              <div className={styles.scrim}>
                <h3>Explore the Artifacts & sence the craftsmanship.</h3>
                <p>
                  From cardinal pottery works to mesmerizing murals, explore the
                  beauty and experience of the artisanship in each artifacts.
                  Reveal your interests in the art form, couple with us to
                  engage in collaborations. Feel free to taste the soul of
                  Mudmoulds and dive into our fascinating art gallery.
                </p>
                <CustomButton />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_gallery.png"
              alt="Third slide"
              class="img-fluid"
            />

            <Carousel.Caption>
              <div className={styles.scrim}>
                <h3>Expertice your skills & knowledge.</h3>
                <p>
                  Mudmoulds is providing a platform for looming artists to
                  explore more opportunities, practice their skills and learn
                  more craftsmanship with our team. We would love to see the
                  birth of experts in our art.
                </p>
                <CustomButton />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_practice.png"
              alt="Third slide"
              class="img-fluid"
            />

            <Carousel.Caption>
              <div className={styles.scrim}>
                <h3>What it takes to embrace the Organic Lifestyle.</h3>
                <p>
                  The busy life schedule introduced many artificial replacements
                  resulting in toxicity and harmful consequences. It’s time to
                  redefine our way of life. Return to nature and embrace the
                  organic lifestyle and we present you the brand new Mudmoulds
                  to make modern life calmer without compromising your
                  engagements.{" "}
                </p>
                <CustomButton />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
        <div className={styles.haveQuestionDiv}>
          <Link href="/contact">
            <a>
              <Button variant="primary rounded-lg" size="sm">
                Have any question?
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SlideShow;
