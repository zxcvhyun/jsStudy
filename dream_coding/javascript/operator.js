'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
console.log(x);
x -= y;
console.log(x);
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : \\ (or), && (and), ! (not)
const value1 = true;
const value2 = 4 > 2;
// \\(or), finds the first truthy value
// value가 하나라도 true 면 바로 멈춤
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value\
console.log(`or: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

function check() {
	for (let i = 0; i < 10; i++) {
		//wasting time
		console.log('😱');
	}
	return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// 값이 같으면 true를 반환한다
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// 타입과 값이 모두 일치해야 함
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // 오브젝트에 들어있는 값이 같아도 서로 다른 레퍼런스를 참조하고 있기 때문에 false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // ellie3 의 레퍼런스 value를  ellie1 로 할당했기 때문에 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
	console.log('Welcome, Ellie!');
} else if (name === 'coder') {
	console.log('You are amazing coder');
} else {
	console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you!');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. Loops
// 조건이 true일때 만 실행. false가 될때가지 계속 반복한다.
let i = 3;
while (i > 0) {
	console.log(`while: ${i}`);
	i--;
}

// do while loop, body code is executed first
// 블럭을 실행한 다음에 조건이 맞는지 안맞는지를 검사
do {
	console.log(`do while: ${i}`);
	i--;
} while (i > 0);

// for loop, for( begin; condition; step)
for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 1) {
	console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 2; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i: ${i}, j: ${j}`);
	}
}

// use, continue
// Q1. 0부터 10까지 짝수만 출력

for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`q1: ${i}`);
	}
}

// Q2. 10까지 출력하되 8을 만나면 break
for (let i = 0; i <= 10; i++) {
	if (i > 8) {
		break;
	}
	console.log(`q2: ${i}`);
}
