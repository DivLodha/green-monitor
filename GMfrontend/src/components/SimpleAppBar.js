import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
class SimpleAppBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" gutterBottom color="inherit">
            Green Monitor
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default SimpleAppBar;