const { checkNumber } = require('../../src/mathUtils')
describe('Unit Testing for checkNumber Function', () => {
	test('returns "Positive" for positive numbers', () => {
		expect(checkNumber(10)).toBe('Positive')
		expect(checkNumber(100)).toBe('Positive')
	})

	test('returns "Negative" for negative numbers', () => {
		expect(checkNumber(-10)).toBe('Negative')
		expect(checkNumber(-100)).toBe('Negative')
	})

	test('returns "Zero" for zero', () => {
		expect(checkNumber(0)).toBe('Zero')
	})

	test('handles edge cases', () => {
		expect(checkNumber(Number.MAX_SAFE_INTEGER)).toBe('Positive')
		expect(checkNumber(-Number.MAX_SAFE_INTEGER)).toBe('Negative')
	})
})
