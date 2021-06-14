import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, CardMedia } from "@material-ui/core";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/Slider.css";
import Aos from 'aos'

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  cardImage: {
    width: 300,
    height: 500
  },
  carTxt: {
    display: "block",
    margin: "0 auto"
  }
}));

function Carousel() {
  const classes = useStyle();
  Aos.init()
  return (
    <div className={classes.root}>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item>
              <Typography variant="h5">Clean & Minimal</Typography>
              <Box component="div" className={classes.carTxt}>
                <Typography variant="body2" className={classes.carTxt}>
                  adaskldnalsndlaksndlaksndlaknsdlkandklasndklasndlkansdlkansd
                  alksdnlkans alksndlkasdnal alskdnlaksdn alksdnlaksnd
                  alksdnlaksnd ln
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <CardMedia className={classes.cardImage}>
                <h1>Image here</h1>
              </CardMedia>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item>
              <Typography variant="h5">Clean & Minimal</Typography>
              <Box component="div" className={classes.carTxt}>
                <Typography variant="body2" className={classes.carTxt}>
                  adaskldnalsndlaksndlaksndlaknsdlkandklasndk alksdnlkans
                  alksndlkasdnal alskdnlaksdn alksdnlaksnd alksdnlaksnd ln
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <CardMedia className={classes.cardImage}>
                <h1>Image here</h1>
              </CardMedia>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
