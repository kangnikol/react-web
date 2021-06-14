import React, { useEffect, useState } from "react";
import Image from "../assets/images/bg/f12.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer as MUIDrawer,
  Button,
  Grow,
  ListItem,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  ListItemText,
  Grid,
  Box,
  List
} from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyle = makeStyles(theme => ({
  card: {
    minWidth: "275",
    justifyContent: "center",
    alignItems: "center"
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  appbar: {
    background: "none"
  },
  icon: {
    color: "#000",
  },
  appbarTitle: {
    color: "#ffffff",
    WebkitFlexGrow: "1",
    fontFamily: "Nunito",
  },
  wrapper: {
    width: "80%",
    margin: "0 auto"
  },
  text: {
    color: "#88C0D0"
  },
  welcome: {
    width: "80%",
    color: "#fff",
  },
  drawerPaper: {
    width: "200vh"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
}));

const menuNavs = [
  {
    ListItem: "HOME"
  },
  {
    ListItem: "ABOUT"
  },
  {
    ListItem: "PORTOFOLIO"
  },
  {
    ListItem: "BLOGS"
  },
  {
    ListItem: "HOME"
  },
  {
    ListItem: "HOME"
  }
];
export default function Header() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  const theme = useTheme();
  const classes = useStyle();

  /*Sidebar section function*/
  const openNav = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const [state, setState] = useState({
    right: false
  });

  const sideNav = slider => (
    <Box component="div" className={classes.slidenav}>
      <List>
        {menuNavs.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemText className={classes.navList}>
              {lsItem.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h1 className={classes.appbarTitle}>
            Senja<span className={classes.text}>Solusi</span>
          </h1>
          <IconButton
            className={classes.menuButton}
            onClick={openNav("right", true)}
          >
            <MenuIcon className={classes.icon} />
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
            <Button variant="outlined" className={classes.button}>LEARN MORE</Button>
          </Typography>
        </Grow>
        <MUIDrawer
          anchor="right"
          open={state.right}
          onCLose={openNav("right", true)}
        >
          <Grid container className={classes.overlay}>{sideNav("right")}</Grid>
        </MUIDrawer>
      </div>
    </div>
  );
}
