import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import elc_logo from "../../Images/Website_Design/elc_logo.png";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      {/* <div className="container-fluid" style={{ height: "8vh" }}> */}

      <div
        className="container-fluid"
        style={{ height: "8vh", position: "relative", zIndex: 1000 }}>
        <nav
          className="navbar navbar-expand-lg bg-body-transparent"
          style={{ height: "10vh" }}>
          <div className="container">
            <Link className="navbar-brand mt-3" href="/">
              <Image
                className="img-fluid"
                src={elc_logo}
                width={157}
                height={87}
                alt="logo"
              />
            </Link>
            {/* <a className="navbar-brand mt-3" href="/">
              <Image
                className="img-fluid"
                src={elc_logo}
                width={157}
                height={87}
                alt="logo"
              />
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navContainer collapse navbar-collapse"
              id="navbarSupportedContent">
              {/*
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                
                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <Link className="nav-link" aria-current="page" href="/">
                    About
                  </Link>
                </li>
                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <a className="nav-link" href="/clientservice">
                    Services
                  </a>
                </li>
                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
                <a className="nav-link" href="/faqs">
                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/faqs" ? "active" : ""
                    }`}>
                    FAQs
                  </li>
                </a>

                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>{" "}
              */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <Link className="nav-link" aria-current="page" href="/">
                    About
                  </Link>
                </li>

                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/clientservice" ? "active" : ""
                  }`}>
                  <Link className="nav-link" href="/clientservice">
                    Services
                  </Link>
                </li>

                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/resources" ? "active" : ""
                  }`}>
                  <Link className="nav-link" href="/resources">
                    Resources
                  </Link>
                </li>

                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/faqs" ? "active" : ""
                  }`}>
                  <Link className="nav-link" href="/faqs">
                    FAQs
                  </Link>
                </li>

                <li
                  className={`nav-item mx-4 ${
                    router.pathname === "/contact" ? "active" : ""
                  }`}>
                  <Link className="nav-link" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <a className="nav-link" href="/faqs">
                <button className="nav-link link mx-3 my-3 p-3 fw-bold text-white rounded text-decoration-none">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
