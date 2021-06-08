import React from "react";
import Switch from "react-switch";
import eruda from "eruda";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Image from "./assets/images/bg/bg.png";
import Header from "./component/Header";
import Project from "./component/Project";
import Info from "./component/Info";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
  const { location } = this.props;
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 800, exit: 400 };
  eruda.init();
  return (
    <TransitionGroup component="div" className={classes.root}>
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        className={classes.pageSlider}
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div>
          <Switch location={location}>
            <CssBaseline />
            <Header />
            <Project />
            <Info />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
