import React from 'react'
import { AppBar, Toolbar, withStyles, IconButton, Typography, makeStyles } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appbar: {
		alignItems: 'center'
	},
	toolbar: {
		justifyContent: 'space-between'
	}
}));

interface MainHeaderProps {
	Title: string
}

const MainHeader: React.FC<MainHeaderProps> = ({Title}) => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appbar}
				color='default'
				position='static'
			>
				<Toolbar
					className={classes.toolbar}
				>
					
					<Typography variant='h6'>
						{Title}
					</Typography>
					
					<IconButton color='inherit' aria-label='GitHub'>
						<GitHub />
					</IconButton>

				</Toolbar>

			</AppBar>
		</div>
	);
}

export default App;