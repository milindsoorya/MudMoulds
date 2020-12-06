import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Link from "next/link";

function Header({ isDark }) {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={header ? styles.header_active : styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/images/logo_white.png" alt="site logo" />
          </a>
        </Link>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
