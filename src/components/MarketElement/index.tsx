import React from 'react';
import { Box, Card, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { MarketItem } from '../../types';

const useStyles = makeStyles(theme => ({
	root: {
		width: 330,
		height: 250,
	},
	infoList: {
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '50%',
		boxSizing: 'border-box',
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
	description: {
		fontSize: '14px',
		fontWeight: 'bold',
	},
	addition: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	tag: {
		background: theme.palette.secondary.light,
		color: theme.palette.secondary.main,
		height: 26,
		borderRadius: 13,
		padding: `0 ${theme.spacing(1.5)}px`,
		marginRight: theme.spacing(1),
		display: 'flex',
		alignItems: 'center',
		'& p': {
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	},
	favorite: {
		width: 26,
		height: 26,
		borderRadius: 13,
		background: theme.palette.secondary.dark,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			color: 'white',
		},
	},
}));

interface MarketElementProps {
	item: MarketItem;
}

const MarketElement: React.FC<MarketElementProps> = ({ item }) => {
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
									<Typography>${item.priceUp.toLocaleString()}</Typography>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box className={clsx(classes.item, classes.smallItem)}>
									<FontAwesomeIcon icon={faThumbsDown} />
									<Typography>${item.priceDown.toLocaleString()}</Typography>
								</Box>
							</Grid>
						</Grid>

						<Box className={classes.item} style={{ marginTop: '8px' }}>
							<Typography color="textSecondary">TOTAL VOLUME</Typography>
							<Typography variant="h6">${item.totalVolume.toLocaleString()}</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Divider />

			<Box className={classes.infoList}>
				<Typography className={classes.description}>{item.description}</Typography>

				<Box className={classes.addition}>
					<Box style={{ display: 'flex' }}>
						{item.tags.map((tag, idx) => (
							<Box className={classes.tag} key={idx}>
								<Typography>{tag}</Typography>
							</Box>
						))}
					</Box>

					{item.favorite && (
						<Box className={classes.favorite}>
							<FontAwesomeIcon icon={faStar} />
						</Box>
					)}
				</Box>
			</Box>
		</Card>
	);
};

export default MarketElement;
