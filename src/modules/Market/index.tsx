import React from 'react';
import { Box } from '@material-ui/core';
import LoginIntro from '../../components/LoginIntro';
import MarketList from './MarketList';

const Market = () => {
	return (
		<Box>
			<LoginIntro />
			<MarketList />
		</Box>
	);
};

export default Market;
