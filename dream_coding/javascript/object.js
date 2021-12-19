// Objects
// - 자바스크립트의 데이터 유형 중 하나
// - 관련 데이터 및/또는 기능 모음
// -JavaScript의 거의 모든 객체는 객체의 인스턴스이다.
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);
// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
console.log(ellie.name);
// key는 string 타입으로 지정해야 함
console.log(ellie['name']); // 정확하게 어떤 key가 필요한지 모를때.  실시간으로 원하는 키의 값을 받아오고 싶다면 이렇게 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 5);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: 해당하는 키가 오브젝트 안에 있는지 검사
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for.. in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
	console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
	console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 20 };
// user와 user2는 가리키고 있는 레퍼런스는 다르지만 같은 오브젝트를 가르키고 있음
const user2 = user;
user2.name = 'coder';
console.log(user);

// 오브젝트도 레퍼런스와 같이 복사하는 방법
const user3 = Object.assign({}, user);
console.log(user3);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 동일한 properties가 있다면 값을 계속 덮어쓴다
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
