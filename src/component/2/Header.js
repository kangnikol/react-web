import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
}));

function Header() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box component="container" className={classes.container}>
        <Typography variant="h2">Who Are We</Typography>
      </Box>
    </div>
  );
}

export default Header;
