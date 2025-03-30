"use client";
import Header from "@/app/components/header/index";
import "./globals.css";
import Image from "next/image";
import hero_img from "@/app/Images/Website_Design/hero-img-v2.png";
export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className="container-fluid landing " style={{ height: "92vh" }}>
          <div
            className=" relative d-flex align-items-center justify-content-center"
            style={{ height: "92vh" }}>
            {/* Consider this */}
            <div className="container">
              <div className="row d-flex align-items-center flex-md-row flex-column imageandtext">
                {/* TEXT */}
                <div className="col-lg-6 col-12">
                  <h4 className="text-intro pt-3 my-3">
                    WE ARE YOUR TRUSTED PARTNER
                  </h4>
                  <p className="intro-top fw-bold font-bold text-6xl leading-tight">
                    Making{" "}
                    <span style={{ color: "rgba(5, 5, 198, 1)" }}>
                      Opportunities
                    </span>{" "}
                    <br />
                    Accessible
                  </p>
                  <p className="my-3 intro-p">
                    We empower our clients with personalized support for study{" "}
                    <br />
                    abroad programs, visa assistance, travel solutions and more.{" "}
                    <br />
                    Explore global possibilities with our expertise.
                  </p>
                  <div className="anchor my-5">
                    <a
                      className="p-3 mt-4 text-white rounded text-decoration-none"
                      href="#">
                      Explore Now
                    </a>
                  </div>
                </div>
                {/* IMAGE */}
                <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center hero_container">
                  <Image className="hero_img" src={hero_img} alt="hero_img" />
                </div>
              </div>
            </div>

            {/* Main code */}
            {/* <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="text-intro pt-3 my-3">
                  WE ARE YOUR TRUSTED PARTNER
                </h4>
                <p className="intro-top fw-bold font-bold text-6xl leading-tight">
                  Making{" "}
                  <span style={{ color: "rgba(5, 5, 198, 1)" }}>
                    Opportunities
                  </span>{" "}
                  <br />
                  Accessible
                </p>
                <p className="my-3 intro-p">
                  We empower our clients with personalized support for study{" "}
                  <br />
                  abroad programs, visa assistance, travel solutions and more.{" "}
                  <br />
                  Explore global possibilities with our expertise.
                </p>
                <div className="anchor my-5">
                  <a
                    className="p-3 mt-4 fw-bold text-white rounded text-decoration-none"
                    href="#">
                    Explore Now
                  </a>
                </div>
              </div>
              <div className="col-md-6 second"></div>
            </div>
          </div>
        </div> */}
          </div>
        </div>
       
      </div>
      {/* <div className=" main-page "></div> */}

      {/* <div
          className="partners"
          style={{
            height: "10px",
            backgroundColor: "rgba(5, 5, 130, 1)",
          }}></div> */}
    </>
  );
}
