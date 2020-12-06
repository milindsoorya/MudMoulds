import styles from "./ImageSlider.module.scss";
import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { FaRegCircle } from "react-icons/fa";
import HaveQuestion from "./HaveQuestion";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //setTimeout(nextSlide, 5000);

  return (
    <>
      <div className={styles.container}>
        <section>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index == current ? styles.active : styles.slide}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt="carousal data"
                    className={styles.image}
                  />
                )}
              </div>
            );
          })}
        </section>
        <HaveQuestion />
        <FaRegCircle className={styles.slide_selector1} />
        <FaRegCircle className={styles.slide_selector2} />
        <FaRegCircle className={styles.slide_selector3} />
        <FaRegCircle className={styles.slide_selector4} />
      </div>
    </>
  );
}

export default ImageSlider;
