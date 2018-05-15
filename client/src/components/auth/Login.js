import React, { Component } from "react";
import Navbar from "../layout/Navbar";

// import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    return (
      <div className="login-page">
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
              <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                <div className="card">
                  <form className="form" method="" action="">
                    <div className="card-header card-header-primary text-center card-signup">
                      <h4 className="card-title">Log in</h4>
                      <div className="social-line">
                        <div className="btn btn-just-icon btn-link">
                          <i className="fab fa-facebook-square" />
                        </div>
                        <a href="#pablo" className="btn btn-just-icon btn-link">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link">
                          <i className="fab fa-google-plus" />
                        </a>
                      </div>
                    </div>
                    <p className="description text-center">Or Be Classical</p>
                    <div className="card-body">
                      <div className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">mail</i>
                            </span>
                          </div>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email..."
                            autoComplete="off"
                            style={{ cursor: "auto" }}
                          />
                        </div>
                      </div>
                      <div className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password..."
                            autoComplete="off"
                            style={{ cursor: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="footer text-center">
                      <a
                        href="#pablo"
                        className="btn btn-primary btn-link btn-wd btn-lg"
                      >
                        Get Started
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="http://www.creative-tim.com">Creative Tim</a>
                  </li>
                  <li>
                    <a href="http://presentation.creative-tim.com">About Us</a>
                  </li>
                  <li>
                    <a href="http://blog.creative-tim.com">Blog</a>
                  </li>
                  <li>
                    <a href="http://www.creative-tim.com/license">Licenses</a>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right">
                ©
                <script>document.write(new Date().getFullYear())</script>2018,
                made with <i className="fa fa-heart heart" /> by
                <a href="">
                  Creative Tim
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
