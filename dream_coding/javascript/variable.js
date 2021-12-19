// 1. Use strict
// added in ES5
// use this for Valina  Javascript
'use strict';

// 2. Variable, rw(read/write) - 메모리에 값을 읽고 쓰기가 가능
// let (added in ES6)
let name = 'ellie';
console.log('name');
name = 'hello';
console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope 블럭을 철저히 무시함
{
	age = 4;
	var age;
}
console.log(age);

// 3. Constant r(readonly) -읽기만 가능하고 다른 값을 쓰는게 불가
// 한번 할당하면 값은 절대 변하지 않음
// 값이 바뀔 일이 없다면 const를 쓰는게 바람직 함
// - security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol - 메모리에 바로 저장 됨
// object, box container : single item 들을 한 박스로 관리할 수 있게 해줌 - 값이 커서 레퍼런스를 통해서 실제 오브젝트가 담겨잇는 메모리를 가리키게 됨
// function, first-class function  : 변수에 할당이 가능하고 인자(파라미터)로도 전달이 가능하고 return 타입으로도 펑션을 리턴할 수 있다.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0 , null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 선언은 되었지만 값이 들어가지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, 고유한 식별자를 통해 우선순위를 주고 싶을때
// 같은 스트링을 작성했어도 다른 심볼로 만들었기 때문에 다른 심볼이 된다.ㅣ
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
// 같은 심볼을 사용하고 싶을때 .for를 붙인다
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // description 스트링으로 변환

// object, real-life object, data structure
const jihyun = { name: 'jihyun', age: '25' };
jihyun.age = 24;
console.log(jihyun);

// 5.Dynamic typing : dynamically typed language
// 어떤 타입인지 선언하지 않고 할당된 타입에 따라 타입이 변경 됨.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // number
console.log(`value: ${text}, type: ${typeof text}`);
