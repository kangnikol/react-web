import React, { useEffect } from "react";
import Image from "../assets/images/bg/bg.png";
import "aos/dist/aos.css";
import Aos from "aos";
import "../assets/css/style.css";
import "../assets/css/plugins.css";
import "../assets/js/plugins";
import "../assets/js/main";
import "../assets/js/swiper.min.js.map";
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

export default function Projs() {
  useEffect(() => {
    Aos.init({ timeout: 2000 });
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <section id="down" class="section-bg-light" data-scroll-section />
      <div class="padding-top-120 padding-bottom-150">
        <div class="pos-rel">
          <h2
            class="title-offset big-head container full z-index-2 text-stroke-black pointer-none padding-top-30"
            data-aos="fade-left"
          >
            <span
              class="d-block"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="horizontal"
              data-splitting
              data-aos="fade-left"
            >
              Projects
            </span>
          </h2>
        </div>
        <div class="js-isotope-grid-box container">
          <div class="empty-grid-1px-50-50-none js-isotope-grid-item"></div>
          <div class="empty-grid-200px-50-50-none js-isotope-grid-item"></div>

          <div class="padding-top-90 grid-item-50-50-100 js-isotope-grid-item">
            <a
              href="project_02.html"
              class="grid-margin-box d-block js-pointer-large js-animsition-link"
              data-scroll
              data-scroll-speed="0.6"
            />
            <div class="hidden-box">
              <div
                class="scrollanim-activate"
                data-scroll
                data-scroll-speed="-1.3"
              >
                <img
                  class="anim-opacity-scale"
                  src="assets/images/portfolio/project_02/lilman.jpg"
                  alt="Project"
                />
              </div>
            </div>
            <div
              class="padding-top-bottom-20 pos-rel scrollanim-activate line-scrollanim-activate"
              data-scroll
              data-scroll-offset="30%"
            >
              <div class="anim-fade-to-left d-block">
                <h3 class="headline-xxxs text-color-black">Lil Man</h3>
                <div class="d-flex flex-wrap flex-justify-between margin-top-10">
                  <span class="subhead-xxs text-color-black subhead-uppercase margin-top-10">
                    Photoshoot
                  </span>
                  <span class="subhead-xxs text-color-black subhead-uppercase margin-top-10">
                    2020
                  </span>
                </div>
              </div>
              <div class="anim-line-bottom black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
