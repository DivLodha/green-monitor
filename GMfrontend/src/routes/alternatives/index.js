import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Redirect } from "react-router-dom";
import { getDashboard, getAlternatives } from "../../helpers/network";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const classes = {
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};
const Alternative = props => {
  return (
    <div>
      <Card style={classes.card}>
        <CardContent>
          <Typography style={classes.title} color="textSecondary">
            {props.alternative.AlternativeType}
          </Typography>
          <Typography variant="headline" component="h2">
            {props.alternative.name}
          </Typography>
          <Typography style={classes.pos} color="textSecondary">
            {props.alternative.type}
          </Typography>
          <Typography style={classes.pos} color="h3">
            {props.alternative.description}
          </Typography>
          <Typography style={classes.pos} color="h3">
            {props.alternative.savings}
          </Typography>
        </CardContent>
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
const Alternatives = props => {
  return (
    <div>
      {props.data
        ? props.data.map(alternative => (
            <Alternative key={alternative.name} alternative={alternative} />
          ))
        : null}
    </div>
  );
};
class AlternativeList extends Component {
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
      const dummydata = [
        {
          name: "Cooling Alternative",
          type: "Cooling",
          description:
            "Keep your thermostat set at 24 degree Celsius, or higher, and on 'auto,' not 'on.' Each degree can mean up to 5% savings on cooling costs.",
          savings: "200"
        },
        {
          name: "Lighting Alternative",
          type: "Lighting",
          description:
            "Turn off lights when not needed, especially incandescent and halogen ones.",
          savings: "200"
        },
        {
          name: "Water Alternative",
          type: "Water",
          description:
            "Turn off the water when brushing your teeth or shaving and save more than 5 gallons per day.",
          savings: "200"
        },
        {
          name: "CoolingAlternative",
          type: "Cooling",
          description:
            "Use exhaust fans in the kitchen, laundry and bathroom to pull hot, humid air up and out.",
          savings: "200"
        },
        {
          name: "Lighting Alternative",
          type: "Lighting",
          description:
            "Use timers or motion-detectors with lamps where applicable.",
          savings: "200"
        }
      ];
      const datas = await getAlternatives();
      this.setState({
        data: datas,
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
          <Alternatives data={this.state.data} />
        )}
      </Layout>
    );
  }
}
export default AlternativeList;