import React, { useEffect } from "react";
import Image from "../assets/images/bg/bg.png";
import "aos/dist/aos.css";
import Aos from "aos";
import "../assets/css/style.css";
import "../assets/css/plugins.css";
import {
  CardMedia,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  makeStyles,
  Grid,
} from "@material-ui/core/";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "500vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: 1,
  },
  cardRoot: {
    maxWidth: 500,
    padding: theme.spacing(2),
  },
  media: {
    height: 450,
  },
  fadeText: {
    fontSize: "10rem",
    whiteSpace: "nowrap",
    textAlign: "right",
  },
  container: {
    flexGrow: 1,
  },
}));

export default function Project() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6}>
          <Card className={classes.cardRoot} data-aos="fade-up">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            data-aos="fade-left"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.cardRoot} data-aos="fade-up">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  data-aos="fade-left"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="flex-end"></Grid>
    </div>
  );
}
