import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Redirect } from "react-router-dom";
import { getDashboard, getDevices } from "../../helpers/network";
import { userLogout } from "../../helpers/authentication";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const classes = {
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const DeviceCard = props => {
  return (
    <div>
      <Card style={classes.card}>
        <CardContent>
          <Typography style={classes.title} color="textSecondary">
           {props.device.deviceType}
          </Typography>
          <Typography variant="headline" component="h2">
            {props.device.name}
          </Typography>
          <Typography style={classes.pos} color="textSecondary">
            {props.device.powerUsage}
          </Typography>         
        </CardContent>
        <CardActions>
          <Button size="small">+Add Usage</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
};
const Loading = props => {
  return (
    <div className="alert alert-info" role="alert">
      Loading ...Please Wait
    </div>
  );
};
const DeviceList = props => {
  return (
    <div style={classes.root}>
      <Grid container spacing={24}>
        <Grid item lg={3}>
          {props.data
            ? props.data.map(device => <DeviceCard key={device.name} device={device} />)
            : null}
        </Grid>
      </Grid>
    </div>
  );
};
class Devices extends Component {
  state = {
    authenticated: true,
    data: null,
    error: false
  };
  async componentDidMount() {
    try {
      // const response = await getDashboard();
      // this.setState({
      //   authenticated: true
      // });
      const dummydata=[
        {
            "_id": "5b779c1e0189ff0014427ba5",
            "name": "TV",
            "deviceType": "TV",
            "powerUsage": 500,
            "userId": "5b771d1b6e70020014afe1ab",
            "__v": 0
        },
        {
          "_id": "5b779c1e0189ff0014427ba5",
          "name": "TV",
          "deviceType": "TV",
          "powerUsage": 500,
          "userId": "5b771d1b6e70020014afe1ab",
          "__v": 0
      }
    ];
      const devices = await getDevices();
      console.log(devices);
      this.setState({
        data: devices,
        authenticated: true
      });
    } catch (e) {
      // userLogout();
      console.log(e);
      this.setState({
        error: true,
        authenticated: false
      });
    }
  }
  render() {
    return (
      <Layout>
        {/* {this.state.authenticated === false && this.state.error === true ? (
          <Redirect to="/users/login" />
        ) : null} */}
        {this.state.authenticated === false && this.state.error === false ? (
          <Loading />
        ) : (
          <DeviceList data={this.state.data} />
        )}
      </Layout>
    );
  }
}

export default Devices;
