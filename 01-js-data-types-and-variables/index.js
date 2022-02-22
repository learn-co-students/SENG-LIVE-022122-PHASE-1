// ------------ Debugging and Testing tools: ------------

// so we can figure out solutions for problems we face 


// console.log: print the value to the console in your developers tools. Limitation: prints

// node: REPL read evaluate print loop: playground: run 'node' inside your terminal 

// debugger: that stops in the middle of your code inside dev tools

// ------------ Variables: ------------

// what is a variable? a tool to store a value, a place in memory for a value to be stored. container for some value. a way to categorize a value

// why use variables? we can reference that data later on. 

// how do we declare variables in js? const let or var 


// var: once a variable was defined, it could be reused 

// let reassign the variables value
// use let when we anticipate that the value is going to change

// let dog = "zoie" // declaring 

// // dog = "timmy" // reassigning 

// dog = "timmy" // redeclare dog 

// let cat; // we can declare a variable without assigning a value 

// const can not reassign the value  
// use this when we know the value isn't going to change 

const dog = "zoie"

// dog = "timmy" // cant do this with const


const cat = "timmy";

// scope: accessibility of the values and the variables 

// global: its accessible everywhere with in the file

// local(function scope): only accessible within the function that its been defined in/ container 

// block scopes: only restricted within the block


// ------------ 7 data types in JS: ------------

// primitive data type: one value 

// why are datatypes important? building blocks of our applications 

// typeof: use this to check the type of data that you are using 

// Number

// whole numbers: 3 
// float numbers: 3.14
// NaN: 'not a number', this means something dealing with numbers went wrong, or some type of calculation is wrong 

// String
// "this is a string"
// 'this is a string'
// ``: used for interpolation, ${}, we use this when we want to return the value of a variable inside of a string // standard: use only when interpolating

// console.log("the dogs name is " + dog) // the way interpolated pre -ES6 

// let value = 3

// console.log(`${value +1}`)

// Undefined: 
// non-existant value 
// no value has been assigned
// something that has no value attached to it 

// Null: empty/non-existant value 
// has to be assigned 

// Boolean

// truthy or falsy values 
// conditional statements use booleans to evaluate what is going to happen next 

// double bang operator (!!)
// bang operator (!) // negate the value 

// examples of falsey values
//  - 0
//  - null
//  - undefined
//  - ""
//  - false
//  - NaN

// everything else is truthy

// BigInt: used for any numbers that are too large, and out of range for the Number type

// Symbol: used in objects as properties, used as a unique identifier for object props, added in ES6

// {
//     name: "aysan"
// }

// ------------ Conditional statements ------------

// add some type of control flow to our application 
// we want to perform different things based on a condition 

// if...else

// if (conditon) {
//     // if that condition is met/ truthy
//     // execute the code written in this block
//     // what is a block? {}
// } else {
//     // catch anything that doesnt meet the conditon 
//     // this is going to execute for all falsey condition 
// }

let pokemon = "Voltorb";
let likes = "dog";

// if (likes === 1) {
//   console.log(`${pokemon} has 1 like`);
// } else {
//   console.log(`${pokemon} has ${likes} likes`);
// }

// logical operatorers 

// === strict comparison: not only compare values, but also types
// == loose comparison: only check values are the same, not the types 

// != loose/ not equal to / types 
// !== 

// < or > 

// <= or >= 

// if...else if...else

let pokemon = "Voltorb"
// let likes = 1;

// if (likes === 0) {
//   console.log("render: Show some love!");
// } else if (likes === 1) {
//   console.log('render: 1 like');
//  } else if (likes === "dog") {
//     console.log("this isnt a number")
// } else {
//   console.log(`render: ${likes} likes`)
// }

// ternary operators
// cleaner/ more readable 

// condition ? truthy response : falsey response

let favorite = true

let response = favorite === true ? "❤️" : "♡"

console.log(response)

// ------------------------------------------------ //
// console.log("------------------------");
// console.log("⬇️ Break Out Activites ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Using let vs. const

// Uncomment the code below to properly declare and assign a value to "x" using "const"

// const x;

// const x = 5;

// const x;

// console.log(`Success! x = ${x}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to properly declare and assign a value to "y" using "let"

// let y;

// let y = 5;

// let y;

// console.log(`Success! y = ${y}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to get a successful response in console

// const a = 2;

// a = 2;

// let b;

// let b = 4

// console.log(`Success! ${a} + ${a} = ${b}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 2: Using if...else

// 🚧 Set a value for "time" between 0 and 24
// let time;

// If "time" is less than or equal to 12...
// if (❓) {

// console.log(`${time} is in the AM.`)

// In all other cases...
// } else {

// console.log(`${time} is in the PM.`)

// }

// ✨ BONUS: Try refactoring the above expression using a ternary operator.

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 3: Using if...else...if

// We are given a variable "marks." Our task is to print:

// - "AA" if marks is greater than 90.
// - "AB" if marks is greater than 80 and less than or equal to 90.
// - "BB" if marks is greater than 70 and less than or equal to 80.
// - "BC" if marks is greater than 60 and less than or equal to 70.
// - "CC" if marks is greater than 50 and less than or equal to 60.
// - "CD" if marks is greater than 40 and less than or equal to 50.
// - "DD" if marks is greater than 30 and less than or equal to 40.
// - "FF" if marks is less than or equal to 30.

// 🚨 Assign a value to "marks" between 0 and 100

// let marks;

// 🚨 Format your if...else if...else conditional below

// if (❓) {
// ...
// } else if (❓) {
// ...
// ...
// } else {
// ...
// }
