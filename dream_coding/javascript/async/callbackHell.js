'use strict';
// Callback 지옥 예제
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not Found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'ellie') {
				onSuccess({ name: 'ellie', role: 'admin' });
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}
// 사용자에게 id와 password를 입력받음
const userStorage = new UserStorage();
let id = prompt('아이디를 입력하세요.');
let password = prompt('패스워드를 입력하세요.');
// 1. 서버에게 로그인 요청 (UserStorage)
userStorage.loginUser(
	id,
	password,
	(success) => {
		userStorage.getRoles(
			id,
			(userRole) =>
				alert(`Hello ${userRole.name}. you hava a ${userRole.role} role`),
			(error) => console.log(error)
		);
	},
	(error) => {
		console.log(error);
	}
);
