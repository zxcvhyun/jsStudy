'use strict';

// JavaScript is synchronous. ()
// hoisting 된 이후부터 코드가 작성 순서에 맞춰서 동기적으로 실행됨
// hoisting: var, function declaration 등 선언이 제일 위로 올라가는 것

console.log('1');
// 비동기적 실행 방법
setTimeout(() => console.log('2'), 1000);
console.log('3');

// hoisting 되는 함수의 선언은 맨 상단으로 올라감
// Synchronous callback 동기적 콜백 - 코드 작성 순서대로 실행 됨
function printImmediately(print) {
	print();
}

function print() {
	console.log('hello');
}
printImmediately(print);
// Asynchronous callback 언제 실행될지 모르는 비동기적 콜백
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log('async call back'), 500);
