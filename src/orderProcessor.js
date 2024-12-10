function processOrder(order) {
	if (!order || !order.items || order.items.length === 0) {
		throw new Error('Invalid order')
	}

	let totalAmount = 0

	order.items.forEach((item) => {
		if (!item.price || !item.quantity || item.quantity <= 0) {
			throw new Error(`Invalid item: ${item.name}`)
		}
		totalAmount += item.price * item.quantity
	})

	if (order.customerType === 'VIP') {
		totalAmount *= 0.9 // 10% discount for VIPs
	} else if (order.customerType === 'Regular') {
		totalAmount *= 1 // No discount
	} else if (order.customerType === 'New') {
		totalAmount *= 1.05 // 5% surcharge for new customers
	}

	if (totalAmount > 1000) {
		console.log('Large order processed')
	}

	return Math.round(totalAmount * 100) / 100
}

module.exports = processOrder
