let d = [1, 3, 2, 5, 4];
let budget = 9;

function solution(d, budget) {
	let answer = 0;
	let sum = d
		.sort((a, b) => a - b)
		.reduce((prev, curr) => {
			if (prev + curr <= budget) {
				answer++;
				return prev + curr;
			}
		}, 0);

	if (sum == d.length) return (answer = d.length);
	console.log(answer);
	return answer;
}

solution(d, budget);
