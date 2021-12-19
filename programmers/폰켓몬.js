let nums = [3, 1, 2, 3];
let nums2 = [3, 3, 3, 2, 2, 4];
let nums3 = [3, 3, 3, 2, 2, 2];

function solution(nums) {
	const max = nums.length / 2;
	const arr = [...new Set(nums)];

	console.log(`max: ${max}`);
	console.log(`arr.length : ${arr.length}`);
	return arr.length > max ? max : arr.length;
}

solution(nums);
solution(nums2);
solution(nums3);
