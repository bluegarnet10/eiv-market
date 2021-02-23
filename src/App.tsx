import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Header } from './components/Header';
import AppRouter from './modules/AppRouter';

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
			<AppRouter />
		</main>
	);
}

export default App;
