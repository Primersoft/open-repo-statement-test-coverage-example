function calculateCartTotal(items, discountCode) {
	if (!Array.isArray(items) || items.length === 0) {
		throw new Error('Invalid items list')
	}

	let total = 0

	items.forEach((item) => {
		if (!item.price || item.price <= 0 || !item.quantity || item.quantity <= 0) {
			throw new Error('Invalid item in cart')
		}
		total += item.price * item.quantity
	})

	if (discountCode) {
		if (discountCode === 'DISCOUNT10') {
			total *= 0.9 // 10% discount
		} else if (discountCode === 'DISCOUNT20') {
			total *= 0.8 // 20% discount
		} else {
			throw new Error('Invalid discount code')
		}
	}

	return Math.round(total * 100) / 100 // Return rounded total
}

module.exports = calculateCartTotal
