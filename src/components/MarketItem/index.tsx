import React from 'react';
import { Box, Card, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		width: 330,
		height: 200,
	},
	infoList: {
		padding: theme.spacing(2),
	},
	item: {
		borderRadius: 5,
		background: theme.palette.secondary.light,
		padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px`,
	},
	image: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		boxSizing: 'border-box',
		'& svg': {
			width: 'auto !important',
			height: 40,
		},
	},
	smallItem: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const MarketItem = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<Box className={classes.infoList}>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={4}>
						<Box className={clsx(classes.item, classes.image)}>
							<FontAwesomeIcon icon={faImage} className={classes.image} />
						</Box>
					</Grid>

					<Grid item xs={8}>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<Box className={clsx(classes.item, classes.smallItem)}>
									<FontAwesomeIcon icon={faThumbsUp} />
									<Typography>$0.96</Typography>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box className={clsx(classes.item, classes.smallItem)}>
									<FontAwesomeIcon icon={faThumbsDown} />
									<Typography>$0.04</Typography>
								</Box>
							</Grid>
						</Grid>

						<Box className={classes.item} style={{ marginTop: '8px' }}>
							<Typography color="textSecondary">Total Volume</Typography>
							<Typography variant="h6">$5,664,950</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Divider />
		</Card>
	);
};

export default MarketItem;
