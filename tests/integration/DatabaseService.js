class DatabaseService {
	async getUserById(userId) {
		// Simulate a database call
		const mockDatabase = {
			1: { id: 1, name: 'John Doe' },
			2: { id: 2, name: 'Jane Doe' },
		}
		return mockDatabase[userId] || null
	}
}

module.exports = DatabaseService
