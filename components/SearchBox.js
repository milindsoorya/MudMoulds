import styles from "./SearchBox.module.scss";
import React from "react";

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <form id="demo-2">
        <input type="search" />
        {/* <img src="images/search.png" /> */}
      </form>
    </div>
  );
}

export default SearchBox;
