import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};
class SimpleAppBar extends Component {
  render() {
    return (
      <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
        {/* <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="headline" className={styles.flex} color="inherit" style={{ flex: 1 }}>
            Green Monitor
          </Typography>
          <div>
          <Button color="inherit" href='/about'>About</Button>
          <Button color="inherit" href='/users/'>Dashboard</Button>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}
export default SimpleAppBar;