'use strict';

// Object - oriented programming
// class: template  템플릿을 이용해 실제 데이터를 만드는것이 object
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

// 새로운 오브젝트 생성 - new
const jihyun = new Person('jihyun', 24);
console.log(jihyun.name);
console.log(jihyun.age);
jihyun.speak();

// 2. Getter and Setter
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	get age() {
		return this._age;
	}
	set age(value) {
		// if (value < 0) {
		// 	throw Error('age can not be neagative');
		// }

		this._age = value < 0 ? 0 : value;
	}
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1);

// 3. Fields (public, private)
// Too soon!
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);

// 4. Static properties and methods
// Too soon!
// static을 붙이면 오브젝트에 상관 없이 클래스 자체에 연결되어 있음
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}
	static printPublisher() {
		console.log(Article.publisher);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // static이 아니라면 오브젝트에서 publisher를 가져올 수 있다
console.log(Article.publisher); // 클래스 이름을 이용해서 호출히야 한다
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw() {
		console.log(`drawing ${this.color} color of`);
	}
	getArea() {
		return this.width * this.height;
	}
}
class Rectangle extends Shape {}
class Triangle extends Shape {
	// Overriding: 재정의 가능
	draw() {
		super.draw(); // super: 부모의 메서드를 호출
		console.log('🔺');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 class의 인스턴스 인지 아닌지 확인
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
