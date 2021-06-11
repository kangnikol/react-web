import React from 'react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  }
}));

function Team() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container>
                <Typography variant="h2">
                    Our Team
                </Typography>
                <Grid item>

                </Grid>
            </Grid>
        </div>
    )
}

export default Team
