import React from "react";
import styles from "./SearchBox2.module.scss";

function SearchBox2() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.search_bar}>
        <input type="search" name="search" pattern=".*\S.*" required />
        <button className={styles.search_btn} type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBox2;
