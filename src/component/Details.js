import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    minWidth: "275",
  },
  big: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Details() {
  const classes = useStyle();
  return <div className={classes.root}></div>;
}
