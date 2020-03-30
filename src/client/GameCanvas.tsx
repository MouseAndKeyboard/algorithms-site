import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '5em',
        display: 'flex',
        justifyContent: 'center'
    },
    canvas: {
        display: 'flex-item',
        width: '25em',
        height: '25em',
        background: 'red'
	}
}));

const GameCanvas: React.FC<{}> = () => {
   
    const classes = useStyles(); 
   
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.canvas} />
        </div>
    ); 
}

export default GameCanvas;