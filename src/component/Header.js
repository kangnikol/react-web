import React, { useEffect } from "react";
import Image from "../assets/images/bg/f12.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer as MUIDrawer,
  Button,
  Grow,
  ListItem,
  List,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  ListItemText,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
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
    alignItems: "left",
  },
  drawerPaper: {
    width: "200vh",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
export default function Header() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const openDrawer = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h1 className={classes.appbarTitle}>
            Senja<span className={classes.text}>Solusi</span>
          </h1>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <Grid
          container
          direction="row"
          justify="space-betwem"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={6} lg={4}>
            <div className={classes.li}>
              <ListItemLink href="#simple-list">
                <ListItemText primary="ABOUT US" />
              </ListItemLink>
              <ListItemLink href="./Project" onClick={handleDrawerClose}>
                <ListItemText primary="PROJECTS" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="CONTACTS" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="SERVICE" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="BLOG" />
              </ListItemLink>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.slideImage} data-aos="fade-up">
              <CardContent>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}></Grid>
        </Grid>
      </MUIDrawer>
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
