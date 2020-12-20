import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import styles from "./Reviews.module.scss";

function Reviews({ slides }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={styles.container}>
      <Card.Title className={styles.title}>Practice Reviews</Card.Title>
      <hr className={styles.hLine} />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <div className={styles.containerItems}>
          <p>
            As an art student it was soo exciting and it was such an opportunity
            to work with these Artisans. Learned alot from them and looking
            forward to collaborate more with the whole team Mudmoulds !
          </p>
          <div className={styles.byLine}>
            <h6>
              <span style={{ color: "#FF849F" }}>~</span> Sujith
            </h6>
            <i>Fine art student</i>
          </div>
        </div>
        <div className={styles.containerItems}>
          <p>
            We had never used a pottery wheel before so were very excited to
            find Mudmoulds, Kerala. Thank you to Vijaya and whole team for your
            hospitality and for patiently teaching us about the beautiful art of
            pottery.
          </p>
          <div className={styles.byLine}>
            <h6>
              <span style={{ color: "#FF849F" }}>~</span> Tara
            </h6>
            <i>Foreign art student</i>
          </div>
        </div>
        <div className={styles.containerItems}>
          <p>
            This was my first time doing a pottery class and it was so lovely!!
            Vijaya chechi was such a beautiful soul and her space was so
            appealing. I highly recommended her class, it was a lot of fun!
          </p>
          <div className={styles.byLine}>
            <h6>
              <span style={{ color: "#FF849F" }}>~</span> Niveditha
            </h6>
            <i>Fine art student</i>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Reviews;
