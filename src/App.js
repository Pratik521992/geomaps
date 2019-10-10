import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Maps from "./Components/Map";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 500,
    width: 400
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Maps />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
