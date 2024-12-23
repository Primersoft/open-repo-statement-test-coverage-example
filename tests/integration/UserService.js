class UserService {
	constructor(databaseService) {
		this.databaseService = databaseService
	}

	async getUser(userId) {
		const user = await this.databaseService.getUserById(userId)
		if (!user) {
			throw new Error('User not found')
		}
		return user
	}
}

module.exports = UserService
