const calculateDiscount = require('../src/calculateDiscount')

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
})
