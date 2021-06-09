import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Image from "../assets/images/bg/f12.jpg";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
    color: "#fff",
  },
  stroke: {
    color: "#000",
    borderColor: "#fff",
  },
  li: {
    display: "flex",
    flexDirection: "row",
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
          <IconButton aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.welcome}>
        <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
          <Typography inline variant="h2" component="h2" align="left">
            WE BRING <br />
            <span className={classes.stroke}>YOUR</span> IDEAS
            <br /> TO LIFE
            <br />
            <Button variant="outlined">LEARN MORE</Button>
          </Typography>
        </Grow>
      </div>
    </div>
  );
}
