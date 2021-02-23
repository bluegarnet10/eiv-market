import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import LoginIntro from '../../components/LoginIntro';
import MarketList from './MarketList';

const useStyles = makeStyles(theme => ({}));

const Market = () => {
	return (
		<Box>
			<LoginIntro />
			<MarketList />
		</Box>
	);
};

export default Market;
