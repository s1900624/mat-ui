import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Radio, RadioGroup,
    FormControlLabel, FormControl, TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles({
    gridContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "130px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    input: {
        marginBottom: "1rem"
    },
    textarea: {
        marginBottom: "1rem",
        width: "100%"
    },
    radiobuttons: {
        float: "left",
        width: "100%"
    }
});

const Contact = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer} spacing={1}>
            <Grid item xs={3}>
                <form className={classes.form}>
                    <FormControl className={classes.form}>
                        <TextField className={classes.input} fullWidth label="Firstname" />
                        <TextField className={classes.input} fullWidth label="Lastname" />
                        <TextField className={classes.input} fullWidth label="Email" type="email" />
                        <TextareaAutosize className={classes.textarea} rows={10} fullWidth />
                        <RadioGroup className={classes.radiobuttons} aria-label="gender" name="gender">
                            <FormControlLabel value="male"   control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other"  control={<Radio />} label="Other" />
                        </RadioGroup>
                        <Button variant="contained" color="primary">Send message</Button>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}

export default Contact;