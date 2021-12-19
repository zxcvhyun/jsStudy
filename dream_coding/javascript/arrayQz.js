// Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	console.log(fruits.toString());

	//---
	console.log(fruits.join());
}

// Q2. make an array out of a string
{
	const fruits = '🍎, 🥝, 🍌, 🍒';
	const array = fruits.split(', ');
	console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	console.log(array.reverse());
	// reverse는 배열 자체를 변화시킨다.
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const array1 = array.slice(2);
	console.log(array1);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	//  true가 되면 리턴한다.
	const result = students.find((student) => student.score === 90);
	console.log(result);
}

// Q6. make an array of enrolled students
{
	// true 인 학생
	const enrollStudent = [];
	students.find(function (item) {
		if (item.enrolled === true) {
			enrollStudent.push(item);
		}
	});
	console.log(enrollStudent);

	//---
	const result = students.filter((student) => student.enrolled === true);
	console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const studentScore = [];
	studentScore.push(students.map((student) => student.score));

	console.log(studentScore);
}

// Q8. check if there is a student with the score lower than 50
{
	const score = students.filter((student) => student.score <= 50);
	console.log(score);

	//--
	// 리턴 true가 있는지 없는지 확인
	const result = students.some((student) => student.score < 50);

	// 모든 항목이 충족되어야 true를 반환한다.
	const result1 = students.every((student) => student.score < 50);
	console.log(result);
}

// Q9. compute students' average score
{
	const result = students.reduce((prev, curr) => prev + curr.score, 0);
	const average = result / students.length;
	console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const result = students.map((student) => student.score).join();
	console.log(result);
}
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	const result = students
		.map((student) => student.score)
		.sort((a, b) => a - b)
		.join();
	console.log(result);
}
