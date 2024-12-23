const UserService = require('./UserService')
const DatabaseService = require('./DatabaseService')

describe('UserService Integration Test', () => {
	let userService
	let databaseService

	beforeEach(() => {
		databaseService = new DatabaseService()
		userService = new UserService(databaseService)
	})

	test('should return user data when user exists', async () => {
		const user = await userService.getUser(1)
		expect(user).toEqual({ id: 1, name: 'John Doe' })
	})

	test('should throw an error when user does not exist', async () => {
		await expect(userService.getUser(99)).rejects.toThrow('User not found')
	})
})
