import { createMuiTheme } from '@material-ui/core';

export const myTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#14142a',
		},
		secondary: {
			main: '#b0b0c1',
			light: '#f7f7fb',
		},
		text: {
			primary: '#14142a',
			secondary: '#b0b0c1',
		},
	},
});

myTheme.overrides = {
	MuiAppBar: {
		colorPrimary: {
			backgroundColor: 'white',
			boxShadow: '0px 2px 4px rgba(51, 99, 120, 0.1)',
			color: myTheme.palette.primary.main,
		},
	},
	MuiButton: {
		root: {
			borderRadius: '30px',
			fontSize: '12px',
		},
		contained: {
			boxShadow: 'none',
		},
	},
	MuiTypography: {
		root: {
			fontSize: '12px',
		},
	},
};
