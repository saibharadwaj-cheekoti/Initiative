import React, { useState } from "react";
import { defaultState } from "C:/Users/pchaturvedi/Desktop/MeApp/client/src/server/defaultState";
import { Link } from "react-router-dom";
// import App from "./src/App.js";

const Login = () => {
  const [state, setState] = useState({
    userName: " ",
    password: " "
  });
  const handleChange = (prop, event) => {
    setState({ [prop]: event });
    console.log(state.userName, state.password);
  };
  return (
    <div className="log">
      <div className="head2">
        <h2>Please Login</h2>
        <input
          value={state.userName}
          onChange={e => handleChange("userName", e.target.value)}
        />
        <input
          value={state.password}
          onChange={e => handleChange("password", e.target.value)}
        />
      </div>
      {defaultState.users.id.map(nam => nam === state.userName) &&
        defaultState.users.password.map(nam => nam === state.password) && (
          <Link to="/">
            <button>Enter</button>
          </Link>
        )}
    </div>
  );
};
export default Login;
