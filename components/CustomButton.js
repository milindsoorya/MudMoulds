import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import styles from "./CustomButton.module.scss";

function CustomButton() {
  return (
    <div className={styles.container}>
      <Link href="/gallery">
        <a>
          <Button variant="primary rounded-pill" size="lg w-50">
            <div className={styles.btnText}>
              Discover
              <FaAngleRight />
            </div>
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default CustomButton;
