/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
	const [min, max] = a > b ? [b, a] : [a, b]
	let count = 0;
	for (let i = 1; i <= min; i++) {
		if ((min % i === 0) && (max % i === 0)) {
			count++;
		}
	}
	return count;
};

console.log(commonFactors(12, 6))
console.log(commonFactors(25, 30))