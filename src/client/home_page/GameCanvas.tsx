import React from 'react'
import { makeStyles, Paper, Grid, PaperProps, GridProps } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '5em',
        display: 'flex',
        justifyContent: 'center',
    },
    canvas: () => ({
        display: 'flex-item',
        width: '25em',
        height: '25em',
        background: 'black',
	})
}));

const GameCanvas: React.FC<{}> = () => {
   
    const classes = useStyles({color: '#292E37'}); 
   
    const paperProps: PaperProps = {
        elevation: 3,
        className: classes.canvas
    }

    const gridProps: GridProps = {
        container: true
    }
    return (
        <div className={classes.root}>
            <Paper {...paperProps}>

                <Grid {...gridProps}>
                    
                </Grid>
            
            </Paper>
        </div>
    ); 
}

export default GameCanvas;