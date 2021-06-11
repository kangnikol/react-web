import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  }
}));
function Portofolio() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <Card>
            <Typography variant="h5">Test</Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <Typography variant="h5">Test</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Portofolio;
