import React from "react";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="copyright pull-right">
          Copyright © {new Date().getFullYear()} DevHype
        </div>
      </div>
    </footer>
  );
};

export default Footer;
