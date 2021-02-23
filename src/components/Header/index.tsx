import React from 'react';
import { AppBar, Box, Button, Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	link: {
		margin: `0 ${theme.spacing(4)}px`,
		cursor: 'pointer',
	},
}));

export const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root}>
			<Typography variant="h6">LOGO</Typography>

			<Box>
				<Link className={classes.link} color="textPrimary">
					MARKET
				</Link>
				<Link className={classes.link} color="textSecondary">
					PORTFOLIO
				</Link>
				<Link className={classes.link} color="textSecondary">
					LP
				</Link>
			</Box>

			<Button color="primary" variant="contained">
				LOGIN
			</Button>
		</AppBar>
	);
};
