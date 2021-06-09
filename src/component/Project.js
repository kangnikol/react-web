import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/images/bg/bg.png";
import Typography from "@material-ui/core/Typography";
import "aos/dist/aos.css";
import Aos from "aos";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "500vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 450,
  },
  card2: {
    justifyContent: "right",
    alignItems: "right",
    maxWidth: 345,
  },
  fadeText: {
    fontSize: "15rem",
    whiteSpace: "nowrap",
    textAlign: "justify",
  },
}));

export default function Project() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.fadeText}>
        <Typography
          inline
          variant="h2"
          component="h2"
          align="center"
          className={classes.fadeText}
          data-aos="fade-left"
        >
          PROJECTS
        </Typography>
      </div>
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
      <div className={classes.card2}>
        <Card className={classes.card2} data-aos="fade-up">
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
      </div>
    </div>
  );
}
