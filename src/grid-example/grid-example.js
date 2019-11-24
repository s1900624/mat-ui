import React from 'react';
import { Grid } from '@material-ui/core';
import './grid-example.css'

const GridExample = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    TEST1
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    TEST2
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    TEST3
                </Grid>
            </Grid>
        </div>
    )
}

export default GridExample;