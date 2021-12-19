left = 13;
right = 17;

function solution(left, right) {
	let sum = 0;

	for (let i = left; i <= right; i++) {
		let count = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) {
				count++;
			}
		}
		console.log(`count: ${count}`);
		if (count % 2 === 0) {
			sum += i;
			console.log(`+sum: ${i}`);
		} else {
			sum -= i;
			console.log(`-sum: ${i}`);
		}
	}
	console.log(sum);
	return sum;
}

solution(left, right);
