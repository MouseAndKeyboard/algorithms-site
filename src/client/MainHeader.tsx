import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	appbar: {
		alignItems: 'center',

	},
	toolbar: {
		justifyContent: 'space-between'
	}
}));

interface MainHeaderProps {
	Title: string
}

const MainHeader: React.FC<MainHeaderProps> = (props) => {

	const { Title } = props;

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appbar}
				color='default'
				position='static'
			>
				<Toolbar>
					<Typography variant="h4">
						{Title}
          			</Typography>

					<IconButton color='inherit'>
						<GitHub />
					</IconButton>

				</Toolbar>

			</AppBar>
		</div>
	);
}

export default MainHeader;