'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍑', '🍒', '🍏'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
console.clear();
// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
	console.log(fruit);
}
// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍉');
console.log(fruits);
// pop: remove an item from the end
const popped = fruits.pop();
console.log(popped);
console.log(fruits);
// unshift: add an item to the beginning
fruits.unshift('🍋');
console.log(fruits);
// remove an item from the beginning
fruits.shift();
console.log(fruits);
// note !! -- shift, unshift ar slower than pop, push

// splice: remove an item by index position
fruits.push('🍌', '🥝', '🍇');
console.log(fruits);
fruits.splice(4, 1);
console.log(fruits);
fruits.splice(1, 1, '🍍', '🍊');
console.log(fruits);

//combine two arrays
const fruits2 = ['🥥', '🍄'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝')); // 1/-1
// includes
console.log(fruits.includes('🥝')); // true/false
// lastIndexOf
// console.clear();
console.log(fruits);
fruits.push('🍑');
console.log(fruits);
console.log(fruits.indexOf('🍑')); // 가장 처음으로 만난 인덱스만 리턴하게 됨
console.log(fruits.lastIndexOf('🍑')); // 가장 마지막 인덱스만 리턴하게 됨
