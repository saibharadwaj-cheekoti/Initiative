import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Task from "./pages/newTask";
import Login from "./pages/login";
import Login2 from "./pages/login2";
import EditPage from "./pages/EditPage";
const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={App2} />
      <Route path="/task" component={Task} />
      <Route path="/login" component={Login} />
      <Route path="/login2" component={Login2} />
      <Route path="/edit" component={EditPage} />
      <Route path="/app" component={App} />
      <Route path="/app" component={App} />
      <Route path="/app3" component={App3} />
    </Switch>
  );
};

export default Routes;
