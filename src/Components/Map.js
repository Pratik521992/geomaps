import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Directions } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: 500,
    position: "relative"
  },
  offlineRoot: {
    marginTop: 20,
    minHeight: 500,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
}));

const mapstyle = {
  width: "100%",
  height: "100%"
};

function Maps(props) {
  const classes = useStyles();
  const { locationData = { lat: 51.3397, lng: 12.3731 } } = props;
  const { lat, lng } = locationData;

  const renderCustomMarkers = () =>  {
      if(!props.newLocation) return '';

    const lat = props.newLocation.lat();
    const lng = props.newLocation.lng();
    return <Marker name={'Custom Marker'} position={{ lat, lng }} />;
  };

  const onMapClicked = (t, map, coord) => {
    const { latLng } = coord;
    props.setNewLocation(latLng);
  };

  if (!lat || !lng) {
    return (
      <Paper className={classes.root}>
        <Paper className={classes.offlineRoot}>
          <Typography variant="h3" gutterBottom color="primary">
            <Directions color="primary" style={{ fontSize: 96 }} />
          </Typography>
          <Typography variant="h4" gutterBottom color="primary">
            Waiting for GPS...
          </Typography>
        </Paper>
      </Paper>
    );
  }
  return (
    <Paper elevation={0} className={classes.root}>
      <Map
        google={props.google}
        zoom={8}
        style={mapstyle}
        initialCenter={{ lat, lng }}
        center={{ lat, lng }}
        onClick={onMapClicked}
      >
        <Marker position={{ lat, lng }} />
        {renderCustomMarkers()}
      </Map>
    </Paper>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAlYTFyfdxXkyHR__I91k8QdqRMED_4D-Q"
})(Maps);
