function calculateDiscount(price, isMember) {
	if (price <= 0) {
		throw new Error('Invalid price')
	}
	if (isMember) {
		return price * 0.9 // 10% discount
	}
	return price // No discount
}

module.exports = calculateDiscount
