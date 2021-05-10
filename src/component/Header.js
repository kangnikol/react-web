import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  card: {
    minWidth: "275",
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
    color: "#5E81AC",
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
}));
export default function Header() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <IconButton>
            <TwitterIcon
              className={classes.icon}
              onClick={() =>
                window.open("https://twitter.com/aya_f_seiei", "_blank")
              }
            />
          </IconButton>
          <h1 className={classes.appbarTitle}>
            Aya<span className={classes.text}>Kisaragi</span>
          </h1>
        </Toolbar>
      </AppBar>
      <div className={classes.welcome}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <h1>ようこそ</h1>
            <ExpandMoreIcon className={classes.iconDown} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
