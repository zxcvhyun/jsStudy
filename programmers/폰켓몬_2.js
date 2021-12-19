let nums = [3, 1, 2, 3];
let nums2 = [3, 3, 3, 2, 2, 4];
let nums3 = [3, 3, 3, 2, 2, 2];

function solution(nums) {
	let answer = 0;
	let arr = [];
	let phoneketmon = [];
	for (let i = 0; i <= nums.length; i++) {
		arr.push(nums[i]);
		if (arr.length === nums.length / 2) {
			arr.forEach((element) => {
				if (!phoneketmon.includes(element)) {
					phoneketmon.push(element);

					if (phoneketmon.length <= nums.length / 2) {
						console.log(`phoneketmon.length: ${phoneketmon.length}`);

						return (answer = phoneketmon.length);
					}
				}
			});
			arr = [];
		}

		return answer;
		//	console.log(`arr : ${arr}`
	}
}
solution(nums);
// solution(nums2);
// solution(nums3);
