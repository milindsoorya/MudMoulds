import Link from "next/link";
import { Navbar, Nav, Form } from "react-bootstrap";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import SearchBox from "./SearchBox";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/images/logo_white.png"
            className={styles.logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? "activeColor mx-4"
                    : "nav-item nav-link mx-4"
                }
              >
                HOME
              </a>
            </Link>
            <Link href="/gallery">
              <a
                className={
                  router.pathname === "/gallery"
                    ? "activeColor mx-4"
                    : "nav-item nav-link mx-4"
                }
              >
                GALLERY
              </a>
            </Link>
            <Link href="/practice">
              <a
                className={
                  router.pathname === "/practice"
                    ? "activeColor mx-4"
                    : "nav-item nav-link mx-4"
                }
              >
                PRACTICE
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname === "/about"
                    ? "activeColor mx-4"
                    : "nav-item nav-link mx-4"
                }
              >
                ABOUT US
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact"
                    ? "activeColor mx-4"
                    : "nav-item nav-link mx-4"
                }
              >
                CONTACT US
              </a>
            </Link>
            <Form inline>
              <SearchBox />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
