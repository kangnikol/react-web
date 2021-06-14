import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#adb8b0"
  }
}));

function About() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="space-around" wrap="nowrap">
        <Grid item className={classes.item}>
          <Typography variant="h2">Who Are We</Typography>
        </Grid>
        <Grid item className={classes.foo}>
          <Typography variant="body2" className="">
            Cloud bread cardigan messenger bag raw denim swag drinking vinegar.
            Pok pok authentic fashion axe, vegan venmo leggings raclette tousled
            twee tattooed. Banh mi humblebrag hammock tacos fashion axe
            aesthetic vegan sustainable taiyaki thundercats jean shorts tousled
            cloud bread waistcoat kogi. Banh mi humblebrag hammock tacos fashion
            axe aesthetic vegan sustainable taiyaki thundercats jean shorts
            tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger
            bag raw denim swag drinking vinegar. Pok pok authentic fashion axe,
            vegan venmo leggings raclette tousled twee tattooed.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
