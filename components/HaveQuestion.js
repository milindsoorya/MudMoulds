import React from "react";
import styles from "./HaveQuestion.module.scss";
import Link from "next/link";

function HaveQuestion() {
  return (
    <div className={styles.questions}>
      <Link href="/contact">
        <a>Have any questions?</a>
      </Link>
    </div>
  );
}

export default HaveQuestion;
