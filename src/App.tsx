import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Header } from './components/Header';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100vw',
		minHeight: '100vh',
		background: theme.palette.secondary.light,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<main className={classes.root}>
			<Header />
		</main>
	);
}

export default App;
