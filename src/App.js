import React from "react";
import eruda from "eruda";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Image from "./assets/bg2.jpg";
import Header from "./component/Header";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
function App() {
  const classes = useStyle();
  eruda.init();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
}

export default App;
