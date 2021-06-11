import React from "react";
import eruda from "eruda";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./component/Nav"
import Portofolio from "./component/Portofolio"
import About from "./component/About"
import Carousel from "./component/Carousel"

const useStyle = makeStyles((theme) => ({
  root: {
    
  },
}));
function App() {
  const classes = useStyle();
  eruda.init();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Portofolio />
      <About />
      <Carousel />
    </div>
  );
}

export default App;
