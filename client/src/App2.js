import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./App2.css";
import ResponsiveDialog from "./Menu";
import { Redirect, Link } from "react-router-dom";
var ScrollArea = require("react-scrollbar");

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function SimpleCard(props) {
  const [select] = useState(false);
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch("http://localhost:3001/api/getTask")
      .then(data => data.json())
      .then(res => setState({ data: res.data }));
  }, []);

  const classes = useStyles();
  const dat = state.data;
  console.log(dat);
  return (
    <Fragment>
      <header className="App-header">
        <img src="img/virtusa-logo.png" className="App-logb" alt="logb" />
      </header>
      {/* <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      > */}
      <div className="card-header darkBlue">In-Progress</div>

      <div className="card-container blue">
        {dat.map(da => {
          if (!da.isComplete) {
            return (
              <Card className={[...classes.card, "card"]}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  />
                  <Typography variant="h5" component="h2">
                    {da.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {da.startDate}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {da.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <ResponsiveDialog da={da} select={select} />
                </CardActions>
              </Card>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-header darkRed">Complete</div>
      <div className="card-container red">
        {dat.map(da => {
          if (!da.isComplete) {
            return (
              <Card className={"card"}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  />
                  <Typography variant="h5" component="h2">
                    {da.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {da.startDate} - {da.endDate}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {da.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <ResponsiveDialog da={da} select={select} />
                </CardActions>
              </Card>
            );
          } else {
            return null;
          }
        })}
        {console.log("select: " + select)}
        {props.select && <Redirect to="/task" />}
      </div>
      {/* </ScrollArea> */}
      <Link className={classes.button} to="/task">
        Add
      </Link>
      {/* <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <div>Some long content.</div>
      </ScrollArea> */}
    </Fragment>
  );
}
