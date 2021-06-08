import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Details from "./Details";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Info() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Details />
    </div>
  );
}
