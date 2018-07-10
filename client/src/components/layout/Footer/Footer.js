import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>Copyright © {new Date().getFullYear()} DevHype</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
