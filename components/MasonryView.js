import React from "react";
import Gallery from "react-photo-gallery";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import styles from "./MasonryView.module.scss";

<<<<<<< HEAD

const MasonryView = () => {
    return (
        <Gallery photos={Murals} columns={2} direction={"column"} margin={10} />
    );
}
=======
const MasonryView = ({ image }) => {
  return (
    <div>
      <Gallery photos={image} direction={"column"} margin={10} />
      <div className={styles.button}>
        <Link href="/gallery">
          <Button variant="primary">View more</Button>
        </Link>
      </div>
    </div>
  );
};
>>>>>>> milind
export default MasonryView;
