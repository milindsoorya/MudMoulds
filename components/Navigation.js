import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

function Navigation() {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a className={router.pathname === "/gallery" ? styles.active : ""}>
              GALLERY
            </a>
          </Link>
        </li>
        <li>
          <Link href="/practice">
            <a className={router.pathname === "/practice" ? styles.active : ""}>
              PRACTICE
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? styles.active : ""}>
              ABOUT US
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname === "/contact" ? styles.active : ""}>
              CONTACT US
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a className={router.pathname === "/search" ? styles.active : ""}>
              <FaSearch />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
