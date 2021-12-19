// Function
// - 가장 기본적인 빌딩 블록
// - 서브프로그램이라고도 불리며 여러번 사용이 가능하다
// - 한가지의 태스크나 값을 계산하기 위해 사용 됨

// Function declaration * 함수가 호출되기 이전에 선언해도 오류가 나지 않는다
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
//- e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
	console.log('Hello');
}
printHello();

function log(message) {
	console.log(message);
}
log('안녕');

// 2. Parameters
// primitive parameters: 메모리에 value가 그대로 저장되어 value가 그대로 전달
// object parameters: 메모리에 레퍼런스에가 저장되고 레퍼런스가 전달됨
function changeName(obj) {
	obj.name = 'coder'; //엘리가 가르키고 있는 name을 변경
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = '지현이가') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi~');

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	for (const arg of args) {
		console.log(arg);
	}
	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // 글로벌 변수
function printMessage() {
	let message = 'hello'; // 로컬 변수
	console.log(message);
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello2';
		console.log(childMessage);
	}

	printAnother();
}
printMessage();

// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}
// best
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

// First-class function
// - function 은 다른 변수와 마찬가지로 변수에 할당할 수 있고
// - function 의 파라미터로 전달이 되며
// - 리턴값으로도 리턴이 된다

// 1. Function expression
// 함수를 선언함과 동시에 변수에 할당할 수 있다.
// 함수를 선언하기 전에 호출하면 에러가 발생한다.
const print = function () {
	// anonymous function
	console.log('print');
};
print();

const printAgain = print;
printAgain();
const sumAgain = sum; // 위에서 만든 sum을 다시 할당
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
// anonymous function
const printYes = function () {
	console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log('No!');
	//print(); // 함수 안에서 스스로를 호출 할 수 있음(recursions)
};

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// 3. Arrow function
// always anonymous
const simplePrint = function () {
	console.log('simplePrint!');
};
const simplePrint1 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 호출
(function hello() {
	console.log('IIFE');
})();

// QUIZ
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder
function calculate(command, a, b) {
	switch (command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
		default:
			return '정확한 값을 입력하세요';
	}
}
console.log(calculate('remainder', 5, 2));
