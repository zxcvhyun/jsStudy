// Promise 이용
class UserStorage {
	async loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === 'ellie' && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					resolve(id);
				} else {
					reject(new Error('not Found'));
				}
			}, 2000);
		});
	}
	async getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'ellie') {
					resolve({ name: 'ellie', role: 'admin' });
				} else {
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}
}
// Promise Chaining
let id = prompt('아이디를 입력하세요.');
let password = prompt('패스워드를 입력하세요.');

const userStorage = new UserStorage();
// userStorage
// 	.loginUser(id, password)
// 	.then((user) => userStorage.getRoles(user))
// 	.then((user) => alert(`Hello ${user.name}. you hava a ${user.role} role`))
// 	.catch(console.log);

async function result() {
	const userPromise = userStorage.loginUser(id, password);
	const rolePromise = userStorage.getRoles(userPromise);
	return rolePromise;
}
result().then(console.log);
