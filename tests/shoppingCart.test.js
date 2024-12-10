const calculateCartTotal = require('../src/shoppingCart')

describe('calculateCartTotal', () => {
	test('throws an error for an empty items list', () => {
		expect(() => calculateCartTotal([], null)).toThrow('Invalid items list')
	})

	test('throws an error for invalid item data', () => {
		const invalidItems = [{ price: -10, quantity: 2 }]
		expect(() => calculateCartTotal(invalidItems, null)).toThrow('Invalid item in cart')
	})

	test('calculates total without discount code', () => {
		const items = [
			{ price: 50, quantity: 2 },
			{ price: 30, quantity: 1 },
		]
		expect(calculateCartTotal(items, null)).toBe(130)
	})

	test('applies DISCOUNT10 correctly', () => {
		const items = [{ price: 100, quantity: 1 }]
		expect(calculateCartTotal(items, 'DISCOUNT10')).toBe(90)
	})

	test('applies DISCOUNT20 correctly', () => {
		const items = [{ price: 100, quantity: 1 }]
		expect(calculateCartTotal(items, 'DISCOUNT20')).toBe(80)
	})

	test('throws an error for invalid discount code', () => {
		const items = [{ price: 100, quantity: 1 }]
		expect(() => calculateCartTotal(items, 'INVALID')).toThrow('Invalid discount code')
	})
})
