import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: 300,
		height: 200,
	},
}));

const MarketItem = () => {
	const classes = useStyles();

	return <Card className={classes.root}></Card>;
};

export default MarketItem;
