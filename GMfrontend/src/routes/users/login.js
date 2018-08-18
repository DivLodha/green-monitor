import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Redirect } from "react-router-dom";
import { loginRequest } from "../../helpers/network";
import { saveUser } from "../../helpers/authentication";
class Login extends Component {
  state = {
    error: null,
    loggedin: null
  };
  updateVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = async e => {
    e.preventDefault();
    this.setState({
      erroremail: null,
      errorpassword: null
    });
    try {
      let response = await loginRequest({
        email: this.state.email,
        password: this.state.password
      });
      saveUser(response);
      this.setState({
        loggedin: true
      });
    } catch (e) {
      this.setState({
        erroremail: e.email,
        errorpassword: e.password
      });
      console.log(e);
    }
  };
  render() {
    return (
      <Layout>
        {this.state.loggedin ? <Redirect to="/users/" /> : null}
        <div className="row">
          <div className="col">
            <h1 className="heading">Please Login</h1>
          </div>
        </div>
        {this.state.erroremail ? (
          <div className="alert alert-danger" role="alert">
            {this.state.erroremail}
          </div>
        ) : null}
        {this.state.errorpassword ? (
          <div className="alert alert-danger" role="alert">
            {this.state.errorpassword}
          </div>
        ) : null}
        <form onSubmit={this.submitForm}>
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </Layout>
    );
  }
}
export default Login;