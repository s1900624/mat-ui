import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import Routes from "./routes";

const useStyles = makeStyles( () => ({
    root: {
        flexGrow: 1,
        padding: 25,
        backgroundImage: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(112,128,113,1) 35%, rgba(0,212,255,1) 100%)"
    },
    list: {
        background: "green"
    },
    title: {
        flexGrow: 1
    }
}));

const AppNavbar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Link to="/">
                        <Typography variant="h5" className={classes.title}>
                            Material UI && Routes
                        </Typography>
                    </Link>
                    <Routes/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppNavbar;