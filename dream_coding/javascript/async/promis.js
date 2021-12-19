'use strict';

// - Promise는 자바스크립트 내장 오브젝트
// - 비동기적인 것을 수행할때 콜백함수 대신에 유용하게 사용 가능
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 promise가 만들어 질때는 전달한 executor 함수가 자동으로 실행이 됨
const promise = new Promise((resolve, reject) => {
	// doing some heave work(network통신, read files)
	console.log('doing something...');
	setTimeout(() => {
		resolve('ellie'); // 성공
		reject(new Error('no network'));
	}, 2000);
});

// 2. Consumers: then, catch, finally
// then: promise가 정상적으로 수행 되어 resolve를 통해 들어 온 값
promise
	.then((value) => {
		// value : promise에서 정상적으로 받아온 resolve의 값
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		// 성공, 실패 여부와 상관없이 마지막에 호출된다.
		console.log('finally');
	});

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then((num) => num * 2)
	.then((num) => num * 3)
	.then((num) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐓'), 1000);
	});
const getEgg = (hen) =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
	});
const cook = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍳`), 1000);
	});

getHen()
	.then(getEgg) // .then((hen) => getEgg(hen))
	.catch((error) => {
		return '🍞';
	})
	.then(cook) // .then((egg) => cook(egg))
	.then(console.log) // .then((meal) => console.log(meal))
	.catch(console.log);
