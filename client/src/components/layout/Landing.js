import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <div
        className="page-header header-filter clear-filter"
        data-parallax="true"
        style={{
          backgroundColor: "rgb(41, 75, 128)",
          transform: "translate3d(0, 0, 0)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">The Developers Hub.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that's why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <a className="btn btn-danger btn-raised btn-lg">
                <i className="fa fa-play" /> Watch video
                <div className="ripple-container" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="title">Meet Developers & Interract</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn&apos;t scroll to get here. Add a button if
                  you want the user to see more.
                </h5>
              </div>
            </div>
            <div className="features">
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">chat</i>
                    </div>
                    <h4 className="info-title">Free Chat</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="material-icons">verified_user</i>
                    </div>
                    <h4 className="info-title">Verified Users</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="material-icons">fingerprint</i>
                    </div>
                    <h4 className="info-title">Fingerprint</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
