import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import styles from "./CustomButton.module.scss";

function CustomButton({ text, icon }) {
  return (
    <div className={styles.container}>
      <Link href="/gallery">
        <a>
          <Button variant="primary rounded-pill" size="lg w-50">
            <div className={styles.btnText}>
              {text ? text : "Discover"}
              {icon ? icon : <FaAngleRight />}
            </div>
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default CustomButton;
