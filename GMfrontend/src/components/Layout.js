import React, { Component } from "react";
import Header from "./Header";
import "./bootstrap.min.css";
import "./app.css";
import SimpleAppBar from "./SimpleAppBar";
import Footer from "./footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <SimpleAppBar />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
export default Layout;
