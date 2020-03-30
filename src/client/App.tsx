import React from 'react'
import { AppBar, Toolbar, withStyles, IconButton, Typography } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const styles = {
	root: {
		flexGrow: 1,
	},
	appbar: {
		alignItems: 'center',
		justifyContent: 'space-between'
	}
};

const App = (props) => {

	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appbar}
				color='default'
				position='static'
			>
				<Toolbar>
					
					<Typography variant='h6'>
						Title
					</Typography>
					
					<IconButton edge="end" color="inherit" aria-label="GitHub">
						<GitHub />
					</IconButton>

				</Toolbar>

			</AppBar>
		</div>
	);
}

export default withStyles(styles)(App);