// JSON

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// 함수는 json에 포함되지 않는다.
	jump: () => {
		console.log(`${name} can jump!`);
	},
};
json = JSON.stringify(rabbit, ['name', 'name', 'size']); // 원하는 properties 만 전달 됨
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);
// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate); // 위 콜백함수에서 date형식으로 변경함
