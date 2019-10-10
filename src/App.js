import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Maps from "./Components/Map";
import "./App.css";

const { useState } = React;
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
  const [newLocation, setNewLocation] = useState('');
  const lat = newLocation?  newLocation.lat() : '';
  const lng = newLocation?  newLocation.lng() : '';
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Maps newLocation={newLocation} setNewLocation={setNewLocation}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography varient="h5" color="primary">
              {`Latitude - ${lat}`}
            </Typography>
            <Typography varient="h5" color="primary">
              {`Longitude = ${lng}`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
