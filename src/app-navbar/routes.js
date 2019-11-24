import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const userStyles = makeStyles({
    listItem: {
        display: "inline-block",
        width:150,
        textAlign: "right",
        color: "white"
    }
});

const listItems = [
    {
        text: "Articles",
        id: 1,
        url: "/"
    },
    {
        text: "Contact",
        id: 2,
        url: "/contact"
    }
]

const Routes = () => {
    const classes = userStyles();
    return (
        <List component="nav">
            {listItems.map((item) => {
                return(
                    <Link key={item.id} to={item.url}>
                        <ListItem className={classes.listItem}>
                            <ListItemText>
                                <Typography>{item.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    )
};

export default Routes;