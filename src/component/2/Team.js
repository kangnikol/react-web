import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardMedia, Box } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#adb8b0"
  },
  carTxt: {
    display: "block",
    margin: "0 auto"
  },
  cardImage: {
    width: 300,
    height: 500
  },
  container: {
      margin: "20 20 20 20",
      display: "grid"
  }
}));

function Team() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
        <Typography variant="h2" align="center">Our Team</Typography>
      <Grid container alignItems="center" justify="center" wrap="nowrap" className={classes.container}>
        <Grid item>
          <CardMedia className={classes.cardImage}>
              IMAGE HERE
          </CardMedia>
        </Grid>
        <Grid item>
          <Typography variant="h5">Jason Harderman</Typography>
          <Box component="div" className={classes.carTxt}>
            <Typography variant="body2" className={classes.carTxt}>
              
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Team;
