const calculateDiscount = require('../../src/calculateDiscount')

describe('calculateDiscount', () => {
	test('throws an error for invalid price', () => {
		expect(() => calculateDiscount(-5, true)).toThrow('Invalid price')
	})

	test('applies discount for members', () => {
		expect(calculateDiscount(100, true)).toBe(90)
	})

	test('does not apply discount for non-members', () => {
		expect(calculateDiscount(100, false)).toBe(100)
	})
	// Failing test: We expect a 15% discount for VIP, but it should be 10%
	test('VIP customer discount should be 15%', () => {
		const order = {
			items: [{ name: 'item1', price: 100, quantity: 5 }],
			customerType: 'VIP',
		}
		// This will fail since the actual discount is 10%, not 15%
		expect(processOrder(order)).toBe(425) // Expected a 15% discount (wrong expectation)
	})
})
