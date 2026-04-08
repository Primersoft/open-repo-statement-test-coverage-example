const calculateDiscount = require('../../src/calculateDiscount')
const processOrder = require('../../src/orderProcessor')

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
	test('VIP customer discount should be 10%', () => {
		const order = {
			items: [{ name: 'item1', price: 100, quantity: 5 }],
			customerType: 'VIP',
		}
		expect(processOrder(order)).toBe(450)
	})
})
