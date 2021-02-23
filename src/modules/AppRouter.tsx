import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Market from './Market';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Market} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
