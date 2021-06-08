import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  card: {
    minWidth: "275",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  icon: {
    color: "#000",
    fontSize: "2rem",
  },
  appbarTitle: {
    color: "#ffffff",
    WebkitFlexGrow: "1",
    fontFamily: "Nunito",
  },
  wrapper: {
    width: "80%",
    margin: "0 auto",
  },
  text: {
    color: "#88C0D0",
  },
  iconDown: {
    color: "#000",
    fontSize: "2rem",
    alignItems: "center",
  },
  welcome: {
    width: "80%",
    margin: "0 auto",
  },
}));
export default function Header() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h1 className={classes.appbarTitle}>
            Senja<span className={classes.text}>Solusi</span>
          </h1>
        </Toolbar>
      </AppBar>
      <div className={classes.welcome}>
        <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
          <Typography inline variant="h2" component="h2" align="left">
            WE GENERATER <br />
            CREATIVE &<br /> NOVATION IDEA
            <br />
            <Button variant="outlined">LEARN MORE</Button>
          </Typography>
        </Grow>
      </div>
    </div>
  );
}
