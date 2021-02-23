import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
	root: {
		padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: 'white',
	},
	left: {
		display: 'block',
		maxWidth: '40%',
	},
	title: {
		paddingBottom: theme.spacing(2),
	},
	buttonGroup: {
		paddingTop: theme.spacing(3),
		display: 'flex',
	},
	button: {
		width: 100,
		marginRight: theme.spacing(2),
	},
	image: {
		width: 'auto !important',
		height: 150,
		marginRight: theme.spacing(4),
	},
}));

const LoginIntro = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box className={classes.left}>
				<Typography variant="h4" className={classes.title}>
					Bet on your Beliefs
				</Typography>

				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam
				</Typography>

				<Box className={classes.buttonGroup}>
					<Button className={classes.button} color="primary" variant="contained">
						LOGIN
					</Button>
					<Button className={classes.button} color="primary" variant="outlined">
						Button
					</Button>
				</Box>
			</Box>

			<FontAwesomeIcon icon={faImage} className={classes.image} />
		</Box>
	);
};

export default LoginIntro;
