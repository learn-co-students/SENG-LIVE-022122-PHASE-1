// let bttnStatus = false

// function handleClick(){
//     bttnStatus = !bttnStatus
// }

// function renderForm(){
//     if (bttnStatus){
//         console.log('rendering web page with form included')
//     } else {
//         console.log('rendering web page with form excluded')
//     }
// }

// what are functions and why do we use them?
// javascript functions are used to make larger processes and actions into simple calls and variables
// a block of code made to do a specific task
// each function should only be concerned with 1 task/ responsibility
// a set of commands which provide a desired result

// Callable and reusable code
// Functions are blocks of code that do something. We use them to break code into small chunks that ideally do one thing per function, making code easier to organize, edit and understand.

// How to write a function

// function declaration
// using this technique means that the function gets hoisted: we can access the function before it has been defined

// myFunc(); // we can call this function before its declaration

// function myFunc() {
//   // write the steps to complete a task
//   console.log("inside myFunc()");
// }

// Deliverable 1

// function loadPage() {
//   console.log("page has loaded, run the program");
//   return "this is a return value";
// }

// loadPage(); // invocation: calling/executing the function

// tested by calling loadPage() in index.js and opening in the browser console

// loadPage(); In the devtools - mainly used for testing purposes

// function return values

// if we don't give a function a return value(explicitly) then it will return undefined
// return also indicates the end of the function

// parameters vs arguments

// we can pass information/data into functions to do something with

// parameters: placeholder defined upon function declaration. A variable representing the value that the function will receive

// function myFunc(num){ // parameter

//     // always going to use 'num' to represent the value that we're working with
//     // allows us to reuse the logic with different values
// }

// // arguments: value that is passed into the function upon invocation

// myFunc(10) // argument
// myFunc(5) // argument

// deliverable 2

// function renderPokemon(char){
//     console.log(`Rendering ${char}`);
// }
// let Pichu = "pichu"

// renderPokemon(Pichu);

// function renderPokemon(character) {
//     console.group(`Rendering ${character}`);
// }

// renderPokemon('Pikachu');

// First class Functions

// functions can behave like values
// a function can be assigned to a variable
// a function can be passed as an argument to another function (CALLBACKS)
// a function can be returned by another function

// assigning a function a variable (function expressions)

// const renderPokemon = function(character) {
//     console.log(`Rendering ${character}`);
// } // functions with no names: anonymous function

// renderPokemon("charmander")

// assign a function to a variable (arrow functions)
// benefit: cleaner/ more readable

// const myFunc = (num) => {
//     console.log(num)
// }

// const myFunc = num => num // return will be made implicitly

// const renderPokemon = (char) => {
//     console.log(`Rendering ${char}`)
// }

// function expression and arrow functions do not get hoisted

// const renderPokemon = (char) => console.log(`Rendering ${char}`);

// renderPokemon("charmander")

// callback functions

// an argument that is a function // a function that is passed as an argument

// can we call on a function passed in as cb before its declaration????

// high order functions: function that is accepting a callback function

// const cb = function () {
//     console.log("this is the first message");
//   }

// setTimeout(cb, 50000);

// arrow syntax
// setTimeout(() => console.log("this is the first message"), 5000);

// reference vs invocation 


// function sayName(string, name){
//     return `${string}, my name is ${name}`
// }

// function greeting(cb, name){ // user sees this, types in a name
//     let str = "Hi!"
//     return cb(str, name) // use a function to evaluate the return value of another function
// }

// global: anything defined int he global scope which means outside of a function or a block


// local: anything declared inside of a function 


// block: anything defined inside of a block 


// let char = "pikachu"

// function renderPokemon(){
//     console.log("local", char)

//     if (char.startsWith('p')){
//         console.log("block", char)
//     }
// }

// console.log("global", char)


// function renderPokemon(){
//     let char = "pikachu"
//     console.log("local", char)

//     // block scope
//     if (char.startsWith('p')){
//         console.log("block", char)
//     }
// }

// console.log("global", char) // no access to the local variable


// function renderPokemon(){
//     let char = "pikachu"
//     console.log("local", p)

//     // block scope
//     if (char.startsWith('p')){
//         let p = []
//         p.push(char)
//         console.log("block", char)
//     }
// }

const anotherFunc = () => {
    greeting(sayName, "Rahul")
}

anotherFunc()

function greeting(cb, name){ // user sees this, types in a name
    let str = "Hi!"
    return cb(str, name) // use a function to evaluate the return value of another function
}

const sayName = (string, name) => {
    return `${string}, my name is ${name}`
}



