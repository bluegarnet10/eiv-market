import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import MarketElement from '../../components/MarketElement';
import { MOCK_MARKET_ITEMS } from '../../mocks/mockMarketItems';

const useStyles = makeStyles(theme => ({
	root: {
		padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	marketList: {
		width: '100%',
		paddingTop: theme.spacing(4),
		display: 'grid',
		gridGap: theme.spacing(2),
		gridTemplateColumns: `repeat(auto-fit, minmax(330px, 1fr))`,
	},
}));

const MarketList = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Typography variant="h5">The hottest markets</Typography>

			<Box className={classes.marketList}>
				{MOCK_MARKET_ITEMS.map((item, idx) => (
					<MarketElement item={item} key={idx} />
				))}
			</Box>
		</Box>
	);
};

export default MarketList;
