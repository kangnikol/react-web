import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  Typography,
  ListItem,
  Divider,
  Paper
} from "@material-ui/core";
import Aos from "aos";
const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400vh",
    backgroundColor: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  about: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto"
  },
  infoTxt: {
    marginTop: "50px",
    paddingBottom: "50px"
  },
  listNumber: {
    color: "#bdc9d5"
  },
  num: {
    paddingRight: "20px"
  }
}));

function About() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.about}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Paper variant="outlined">
              <Typography variant="h2">
                Who Are We
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper variant="outlined" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
