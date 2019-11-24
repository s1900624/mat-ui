import React from 'react';
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button, Typography, CardActions, Grid } from "@material-ui/core";
import './grid-example.css'

import { datas } from "./data";


const useStyles = makeStyles({
    gridContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "130px",
    },
    gridItem: {
        padding: "1.0rem",
        borderRadius: "1rem",
        boxShadow: "-14px 20px 32px -10px rgba(0,0,0,0.75)",
    },
    cardMedia: {
        height: "35vh",
    },
});

const GridExample = () => {
    const classes = useStyles();
    return (
        <main>
            <Grid container className={classes.gridContainer} spacing={2}>
                {datas.map((data) => {
                    return(
                        <Grid key={data.id} item xs={3} className={classes.gridItem}>
                            <Card className={classes.gridItem}>
                                <CardMedia
                                    image={data.image}
                                    component="img"
                                    alt={data.alt}
                                    height="300px" />
                                <CardContent>
                                    <Typography variant="h4">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="caption">
                                        {data.text}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        color="secondary">
                                        Click me
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </main>
    )
}

export default GridExample;