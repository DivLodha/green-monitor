import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import { userLogout, isLoggedIn, userInfo } from "../helpers/authentication";

import MenuIcon from "@material-ui/icons/Menu";
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
class SimpleAppBar extends Component {
  logout = e => {
    userLogout();
    window.location.href = "/";
  };
  render() {
    const full_name = isLoggedIn() ? userInfo().full_name : null;
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>           
            <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
              Green Monitor
            </Typography>
            <Button color="inherit" href="/about">
                About
              </Button>              
              <Button color="inherit" href="/users/">
                Add Device
              </Button>              
            <div>

             
              {isLoggedIn() ? (
          <div>
            <Button color="inherit" href="/devices">
                Devices
              </Button>
            <Button color="inherit" onClick={this.logout}>Logout</Button>
            <Button color="inherit">Welcome {full_name}!</Button>
          </div>
        ) : 
       ( <div>
       <Button color="inherit" href="/register">
                Register
       </Button>
        <Button color="inherit" href="/users/login">
        Login
        </Button>
        </div>)}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default SimpleAppBar;
