const processOrder = require('../../src/orderProcessor')

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

	test('TC-14 Standard Short Trip: regular customer without extra conditions', () => {
		const order = {
			items: [{ name: 'shortTripFare', price: 20, quantity: 2 }],
			customerType: 'Regular',
		}

		expect(processOrder(order)).toBe(40)
	})

	test('TC-15 Premium Long Trip: VIP discount with large-order path', () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

		const order = {
			items: [{ name: 'premiumLongTripFare', price: 150, quantity: 10 }],
			customerType: 'VIP',
		}

		expect(processOrder(order)).toBe(1350)
		expect(logSpy).toHaveBeenCalledWith('Large order processed')

		logSpy.mockRestore()
	})
})
