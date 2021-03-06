/**
 * format prices
 * @param price
 * @param toString
 * @returns {string}
 */
export default function formatPrice (price, toString = true) {
	return toString ? price.toLocaleString('ru-RU',{
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}) : price.toFixed(2) * 1;
}
