import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, AppBarProps, TypographyProps, IconButtonProps } from '@material-ui/core/index'

import { GitHub } from '@material-ui/icons'

const useStyles = makeStyles((styles: {}) => ({
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

	const classes = useStyles({});

	const appBarProps: AppBarProps = {
		className: classes.appbar,
		color: 'default',
		position: 'static'
	}

	const typographyProps: TypographyProps = {
		variant: 'h4'
	}

	const githubButtonProps: IconButtonProps = {
		color: 'inherit'
	}

	return (
		<div className={classes.root}>
			<AppBar
				{...appBarProps}
			>
				<Toolbar>
					<Typography {...typographyProps}>
						{Title}
          			</Typography>

					<IconButton {...githubButtonProps}>
						<GitHub />
					</IconButton>

				</Toolbar>

			</AppBar>
		</div>
	);
}

export default MainHeader;