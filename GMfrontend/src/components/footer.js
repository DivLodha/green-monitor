import React, { Component } from "react";

const Footer = props => {
  return (
    <div>
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
            <script>document.write(new Date().getFullYear())</script>
            {/* <!-- , made with <i className="material-icons">favorite</i> by
                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web. --> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
