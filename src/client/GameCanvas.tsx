import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '5em',
        display: 'flex',
        justifyContent: 'center',
    },
    canvas: props => ({
        display: 'flex-item',
        width: '25em',
        height: '25em',
        background: props.color,
	})
}));

const GameCanvas: React.FC<{}> = () => {
   
    const classes = useStyles({color: '#292E37'}); 
   
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.canvas}>

                <Grid container>
                    
                </Grid>
            
            </Paper>
        </div>
    ); 
}

export default GameCanvas;