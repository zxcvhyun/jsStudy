// async & await
// 깔끔하게 Promise를 사용하는 방법

// 1. async
async function fetchUser() {
	return 'ellie';
}
const user = fetchUser();
user.then(console.log);

// 2. await 🌟
// async가 붙은 함수 안에서만 사용이 가능하다.
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
	// delay가 끝날때까지 기다려줌
	await delay(2000);
	return '🍎';
}
async function getBanana() {
	await delay(1000);
	return '🍌';
}
// async와 await 을 쓰지 않으면 이렇게 작성해야 함
// function getBanana2() {
// 	return delay(1000).then(() => '🍌');
// }

// Promise 의 중첩
function pickFruits() {
	return getApple().then((apple) => {
		return getBanana().then((banana) => `${apple} + ${banana}`);
	});
}
pickFruits().then(console.log);

// async 와 await 사용
async function pickFruits2() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}
pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]).then((fruits) =>
		fruits.join(',')
	);
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
