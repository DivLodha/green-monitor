import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Redirect } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col">
            <h1 className="heading">Please Register</h1>
          </div>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              name="name"
              type="text"
              onChange={this.updateVal}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              onChange={this.updateVal}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              onChange={this.updateVal}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input
              name="password"
              onChange={this.updateVal}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </Layout>
    );
  }
}
export default Register;
