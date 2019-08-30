import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { defaultState } from "../server/defaultState";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      defaultUsers: "",
      redirect: false
    };
  }

  checkCreds = (e, state) => {
    let validated = false;
    state.defaultUsers.map(u => {
      if (!validated) {
        if (state.username === u.id && state.password === u.password) {
          console.log("User and password exists");
          validated = true;
        }
      }
      return 0;
    });
    if (!validated) {
      alert("CREDENTIALS NOT FOUND");
    } else {
      this.setState({ redirect: validated });
    }
    console.log(this.state.redirect);
    console.log(this.state.defaultUsers);
  };

  componentDidMount() {
    this.setState({ defaultUsers: defaultState.users });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.checkCreds(event, this.state)}
            />
          </div>
          {this.state.redirect && <Redirect to="/" />}
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Login;
