import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import SearchBox from "./SearchBox";

function Header({ isDark }) {
  const router = useRouter();
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
    // <div className={header ? styles.header_active : styles.header}>
    //   <div className={styles.logo}>
    //     <Link href="/">
    //       <a>
    //         <img src="/images/logo_white.png" alt="site logo" />
    //       </a>
    //     </Link>
    //   </div>
    //   <Navigation />
    // </div>

    <div className={styles.container}>
      <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="/images/logo_white.png"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <a class="nav-item nav-link mx-3">HOME</a>
            </Link>
            <Link href="/gallery">
              <a class="nav-item nav-link mx-3">GALLERY</a>
            </Link>
            <Link href="/practice">
              <a class="nav-item nav-link mx-3">PRACTICE</a>
            </Link>
            <Link href="/about">
              <a class="nav-item nav-link mx-3">ABOUT US</a>
            </Link>
            <Link href="/contact">
              <a class="nav-item nav-link mx-3">CONTACT US</a>
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
