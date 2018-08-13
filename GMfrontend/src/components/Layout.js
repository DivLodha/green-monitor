import React, { Component } from "react";
import Header from "./Header";
import "./bootstrap.min.css";
import "./app.css";
import SimpleAppBar from "./SimpleAppBar";
class Layout extends Component {
  render() {
    return (
      <div>
        <SimpleAppBar />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;
