import React from 'react'
import { AppBar, Toolbar, withStyles } from '@material-ui/core'

const styles = {
	root: {
	  flexGrow: 1,
	},
	appbar: {
	  alignItems: 'center',
	}
  };
  

const App = (props) => {

	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appbar}
				color="default"
				position="static"
			>

				
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(App);