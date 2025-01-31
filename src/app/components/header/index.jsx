import React from "react";
import Image from "next/image";
import elc_logo from "../../Images/Website_Design/elc_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid" style={{ height: "8vh" }}>
        <nav
          className="navbar navbar-expand-lg bg-body-transparent"
          style={{ height: "10vh" }}>
          <div className="container">
            <a className="navbar-brand mt-3" href="/">
              <Image
                className="img-fluid"
                src={elc_logo}
                width={157}
                height={87}
                alt="logo"
              />
            </a>
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
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="/clientservice">
                    Services
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="/faqs">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
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
