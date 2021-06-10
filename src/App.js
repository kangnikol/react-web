import React from "react";
import eruda from "eruda";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Image from "./assets/images/bg/f12.jpg";
import Nav from "./component/Nav"

const useStyle = makeStyles((theme) => ({
}));
function App() {
  const classes = useStyle();
  eruda.init();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
    </div>
  );
}

export default App;
