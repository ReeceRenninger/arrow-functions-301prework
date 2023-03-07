'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function (course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function (num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function (array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



let sum = (a, b, c, d) => `${a + b + c + d}`; // one liner

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(sum(1, 2, 3, 4)); needs to output 10


let objectLit = () => ({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(objectLit()); had to remove the return with curly braces and wrap object pairs in parens


let sumAndProduct = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(sumAndProduct(3, 9)); // needs to output an array with 12, 27


let message = (name) => `Hello, ${name}!`;

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(message('Allie'));


let Student = function (name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe Schmoe', 100, 'Anytown, USA');

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
// console.log(joe);

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.prototype.greeting = function () {
  return `Hi, my name is ${this.name}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
// console.log(joe.greeting());

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.courseName = () => 'This student is enrolled in Code 301.';

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function () {
  console.log(this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scope();

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scopeArrow();

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// The "this" is referring back to the object that is being created by the constructor so the values are being pulled from those keys of name, age, and hometown.

// 2. What is "this" when joe.scopeArrow() is invoked?
// The "this" looks as though its going into the global window object, rather than the object being created by the constructor.

// 3. Explain why "this" is different when an arrow function is used.
// "this" retains the value of its enclosing scope when its used in a traditional constructor, however it does not do that in an arrow function. So if I am making a constructor I need to stick with the old way of creating a function to have it retain the value within the scope I want. It would be interesting to see if we could set data locally in the window and try to pull that with an arrow function constructor since it looks like it still looks for the name, age, and hometown in the window but they are just not set to anything at this time.
