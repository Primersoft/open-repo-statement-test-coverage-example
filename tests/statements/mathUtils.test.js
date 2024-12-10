// mathUtils.test.js
const { checkNumber } = require('../../src/mathUtils')

describe('Statement Testing for checkNumber Function', () => {
	test('should cover statement 1 (positive numbers)', () => {
		expect(checkNumber(5)).toBe('Positive') // Covers Statement 1
	})

	test('should cover statement 2 (negative numbers)', () => {
		expect(checkNumber(-5)).toBe('Negative') // Covers Statement 2
	})

	test('should cover statement 3 (zero)', () => {
		expect(checkNumber(0)).toBe('Zero') // Covers Statement 3
	})
})
