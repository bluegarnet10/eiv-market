export interface MarketItem {
	description: string;
	tags: string[];
	priceUp: number;
	priceDown: number;
	totalVolume: number;
	favorite?: boolean;
}
