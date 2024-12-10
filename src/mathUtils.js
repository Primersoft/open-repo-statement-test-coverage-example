// mathUtils.js
function checkNumber(num) {
	if (num > 0) {
		return 'Positive' // Statement 1
	} else if (num < 0) {
		return 'Negative' // Statement 2
	}
	return 'Zero' // Statement 3
}

module.exports = { checkNumber }
