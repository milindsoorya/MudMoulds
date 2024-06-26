import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, Form } from "react-bootstrap";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

import SearchBox2 from "./SearchBox2";

function Header() {
  const router = useRouter();

  const [headerColor, setHeaderColor] = useState("transparent");
  const [expanded, setExpanded] = useState(false);

  // const listenScrollEvent = () => {
  //   window.scrollY > window.innerHeight / 2
  //     ? setHeaderColor("dark")
  //     : setHeaderColor("transparent");
  // };

  useEffect(() => {
    const listenScrollEvent = () => {
      window.scrollY > window.innerHeight / 2
        ? setHeaderColor("dark")
        : setHeaderColor("transparent");
    };

    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div className={styles.container}>
      <Navbar
        fixed="top"
        bg={`${headerColor}`}
        variant="dark"
        expand="lg"
        expanded={expanded}
      >
        <Navbar.Brand href="/" className="ml-2">
          <img
            src="/images/logo_white.png"
            className={styles.logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <a
                onClick={() => setExpanded(false)}
                className={
                  router.pathname === "/"
                    ? "activeColor mx-4"
                    : "notActive mx-4"
                }
              >
                HOME
              </a>
            </Link>
            <Link href="/gallery">
              <a
                onClick={() => setExpanded(false)}
                className={
                  router.pathname === "/gallery"
                    ? "activeColor mx-4"
                    : "notActive mx-4"
                }
              >
                GALLERY
              </a>
            </Link>
            <Link href="/practice">
              <a
                onClick={() => setExpanded(false)}
                className={
                  router.pathname === "/practice"
                    ? "activeColor mx-4"
                    : "notActive mx-4"
                }
              >
                PRACTICE
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setExpanded(false)}
                className={
                  router.pathname === "/about"
                    ? "activeColor mx-4"
                    : "notActive mx-4"
                }
              >
                ABOUT US
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={() => setExpanded(false)}
                className={
                  router.pathname === "/contact"
                    ? "activeColor mx-4"
                    : "notActive mx-4"
                }
              >
                CONTACT US
              </a>
            </Link>
            <div className="mr-2">
              <SearchBox2 />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
