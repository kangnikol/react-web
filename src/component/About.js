import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  List,
  CardMedia,
  CardContent,
  Typography,
  ListItem
} from "@material-ui/core";
const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  about: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto"
  },
  infoTxt: {
      marginTop: "50px"
  }
}));

function About() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.about}>
        <Grid container direction="column" alignContent="center" spacing={6}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <h1>Who We Are</h1>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                data-aos="fade-left"
                className={classes.infoTxt}
              >
                Cloud bread cardigan messenger bag raw denim swag drinking
                vinegar. Pok pok authentic fashion axe, vegan venmo leggings
                raclette tousled twee tattooed. Banh mi humblebrag hammock tacos
                fashion axe aesthetic vegan sustainable taiyaki thundercats jean
                shorts tousled cloud bread waistcoat kogi. Banh mi humblebrag
                hammock tacos fashion axe aesthetic vegan sustainable taiyaki
                thundercats jean shorts tousled cloud bread waistcoat kogi.
                Cloud bread cardigan messenger bag raw denim swag drinking
                vinegar. Pok pok authentic fashion axe, vegan venmo leggings
                raclette tousled twee tattooed.
              </Typography>
              <Grid container direction="row" spacing={7}>
                <Grid item xs={3}>
                  <List>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={3}>
                  <List>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                    <ListItem>
                      <p>test</p>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={8}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
