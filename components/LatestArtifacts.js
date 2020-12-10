import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import styles from "./LatestArtifacts.module.scss";
import Button from "react-bootstrap/Button";

function LatestArtifacts() {
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
      <Card.Title className={styles.title}>OUR LATEST ARTIFACTS</Card.Title>
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
          <img src="images/latestArtifacts/latestArtifact1.png" />
        </div>
        <div className={styles.containerItems}>
          <img src="images/latestArtifacts/latestArtifact2.png" />
        </div>
        <div className={styles.containerItems}>
          <img src="images/latestArtifacts/latestArtifact3.png" />
        </div>
        <div className={styles.containerItems}>
          <img src="images/latestArtifacts/latestArtifact4.png" />
        </div>
      </Carousel>
      <div className={styles.button}>
        <Button variant="primary">View more</Button>
      </div>
    </div>
  );
}

export default LatestArtifacts;
