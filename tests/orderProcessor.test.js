const processOrder = require('../src/orderProcessor')

describe('processOrder', () => {
	test('throws an error for an invalid order', () => {
		expect(() => processOrder(null)).toThrow('Invalid order')
	})

	test('throws an error for invalid item in order', () => {
		const order = {
			items: [{ name: 'item1', price: 10, quantity: 0 }],
			customerType: 'Regular',
		}
		expect(() => processOrder(order)).toThrow('Invalid item: item1')
	})

	test('processes order for a Regular customer', () => {
		const order = {
			items: [{ name: 'item1', price: 100, quantity: 2 }],
			customerType: 'Regular',
		}
		expect(processOrder(order)).toBe(200)
	})

	test('processes order for a VIP customer', () => {
		const order = {
			items: [{ name: 'item1', price: 100, quantity: 5 }],
			customerType: 'VIP',
		}
		expect(processOrder(order)).toBe(450) // 10% discount
	})

	// Note: No test case for "New" customer surcharge or totalAmount > 1000
})
