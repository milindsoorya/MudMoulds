import React, { useEffect, useState } from "react";
import styles from "./SearchBox2.module.scss";
import search from "../search.json";
import Fuse from "fuse.js";
import Highlight from "react-highlighter";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

function SearchBox2() {
  const [btnStatus, setBtnStatus] = useState(false);
  const [query, setQuery] = useState("");

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  useEffect(() => {
    query ? setBtnStatus(true) : setBtnStatus(false);
  });

  const fuse = new Fuse(search, {
    keys: ["title", "description", "link"],
    isCaseSensitive: false,
    includeMatches: true,
  });

  const results = fuse.search(query);
  const searchResults = results.map((result) => result.item);

  return (
    <>
      <div className={styles.container}>
        <form action="" inline="true" className={styles.search_bar}>
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            required
            onChange={handleOnSearch}
            autoComplete="off"
          />
          <Link href="#">
            <button
              className={styles.search_btn}
              type="submit"
              onClick={() => setBtnStatus(!btnStatus)}
            >
              <span>Search</span>
            </button>
          </Link>
        </form>
      </div>

      <div className={btnStatus ? styles.resultBoxActive : styles.resultBox}>
        {searchResults.map((item) => {
          const { title, description, link } = item;

          return (
            <Link href={`${link}`}>
              <a className={styles.item}>
                <Highlight
                  search={query}
                  matchStyle={{
                    color: "red",
                    backgroundColor: "yellow",
                    padding: 0,
                  }}
                >
                  {title}
                </Highlight>
                <span>
                  <FaAngleRight />
                </span>

                <Highlight
                  search={query}
                  matchStyle={{
                    color: "red",
                    backgroundColor: "yellow",
                    padding: 0,
                  }}
                >
                  {description}
                </Highlight>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SearchBox2;
