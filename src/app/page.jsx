import Header from "@/app/components/header/index";
// import Navbar from "./components/Navbar";
// import hero_img from "./Images/Website_Design/hero_img.png";
export default function Home() {
  return (
    <>
      <div
        className="container-fluid mainContainer"
        style={{ height: "100vh" }}>
        <Header />
        <div
          className="section-one d-flex align-items-center justify-content-center"
          id="section-one"
          style={{ height: "90vh" }}>
          {/* Consider this */}
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
                    className="p-3 mt-4 text-white rounded text-decoration-none"
                    href="#"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <img src={{ hero_img }} alt="" />
              </div>
            </div>
          </div> */}

          {/* Main code */}
          <div className="container">
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
        </div>
        <div
          className="partners"
          style={{
            height: "180px",
            backgroundColor: "rgba(5, 5, 130, 1)",
          }}></div>
      </div>
    </>
  );
}
