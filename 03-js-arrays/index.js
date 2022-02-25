// Warmup

// const add = (num1, num2) => num1 + num2;

// const multiply = (num1, num2) => num1 * num2;

// const sub = (num1, num2) => num1 - num2;

// function compute(cb) {
//   return cb(6, 3);
// }

// console.log(compute(add))
// console.log(compute(sub))
// console.log(compute(multiply))

// // compute((3, 6) => {
// //     return 3 + 6
// // })
// Understanding arrays

// What are arrays and how do they allow us to structure our data?
// data structure 
// objects
// lists 
// list of elements 
// ordered list: the way that elements are added to the array, is the same order they'll be retreived  
// list with indexes starting from zero 
// list of multiple data types 

// Define a variable 'pokemon' set to an empty array.

// const pokemon = []

// Rewrite the 'pokemon' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'

// const pokemon = ['pikachu', 'bulbasour', 'jigglypuff']

// // pokemon[3] = "mew"
// // Elements: each item in the array is referred as element
// // each element has an index number associated with it, starts with 0 
// // we can use index numbers to access the element 

let students = ["tammy", "matthew", "adam"]

// use bracket notation + the index number => element 

// console.log(students[2])

// Return 'bulbasour' from the pokemon array

// console.log(pokemon[1])


// Modifying elements:

// .push: add to the end of the array / destructive
// .unshift: add to the beginning of the array / destructive
// [...existingArry, newElement] => spread operator / non destructive 
// [newElement, ...existingArr] => to add to beginning using spread operator / non destructive 

// let newStudentsArr = [...students, "allison"]
// students.push("darby")
// students.unshift("althea")
// console.log(students)

// Add a new element 'mew' to the end of pokemon. There are 2 ways this can be accomplished. Which method is best practice and why?

// pokemon.push('mew')

// const newPokemon = [...pokemon, "mew"]

// pokemon[3] = 'mew'

// Add a new element 'Gloom' to the beginning of pokemon.

// pokemon.unshift('gloom')

// const newPokemon = ['gloom', ...pokemon]

// Removing elements 

// .pop : remove from the end of the array
// .shift : beginning of the array 

// slice 
// splice 

// Remove the first element of 'pokemon'

// pokemon.shift()

// Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'squirtle', 'turtwig'.

// const favorites = [pokemon[0], pokemon[1], "Squirtle", "Turtwig"];

// const favorites = [...pokemon.slice(0, 2), 'squirtle', 'turtwig'];

// const favorites = [...pokemon.slice(2),'squirtle', 'turtwig']

// const favorites = [...pokemon.splice(0,2), "squirtle", "turtwig"]

// For the following exercises, comment in the following array:

const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// looping methods:

// loop through an array: cycling through each element in the array to perform a task on each individual elements 
// this is more beneficial when we want to perform the same task on all the elements in the array 

// for loop

// for (let i = 0; i < arr.length; i++){
//     // run whatever task on each element 
// }

// for (let i = 0; i < students.length; i++){
//     console.log(students[i])
// }
// Define a for loop that will log each pokemon character to the console.

// for (let i=0; i < 10; i++) {
//     console.log("hiiiii");
// }

// for..of

// for (const element of arr){
    // we are only dealing with 1 element at a time 
// }

// for (const x of students){
//     anotherFunc(x)
// }


// function anotherFunc(el){
//     console.log(el)
// }

// Rewrite the previous exercise using a for..of loop

// for (const poke of pokemon){
//     console.log(poke)
// }

// iterators 

// iterate: unpack the array, and handle each element individually 

// .forEach

// for each element in the array, run the callback function

let dogs = ["timmy", "zoie", "king"]

// dogs.forEach(function(dog){
//     // deal with each dog element individually
// })

// arrow syntax version 
// it has no return value 
// when should we use forEach: print values, or pass the element somewhere, when we dont need to change the elements 
// dogs.forEach((dog) => console.log(dog))

// Use .forEach() to iteratate through the pokemon array and return each character name in large caps

pokemon.forEach(element => element.toUpperCase());

// Searching an array: .find() vs .filter()

// find is only going to return 1 match, going to be the first match that returns true 

// arr.find(function(){
//     // write a conditional for what we want to search our array based on 
// })

// let result = pokemon.find(function(char){
//     return char.startsWith("S")
// })
// let result = pokemon.find(char => char.startsWith("S"))

// console.log(result)

// filter going to return a new array of all the matches 

// const condition = (char, x) => {
//     console.log(char)
//     return char.startsWith('S')
// }

// let results = pokemon.filter((char) => condition(char, 5))

// console.log(results)

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// Modifying an elements in an array

// .map()
// will return a new array of new elements based on whats happening inside of the callback function 
// non destructive 

// arr.map(function(element){
//     // do something to the element 
// })

// Using map, return a new array with all pokemon character names lowercased.

// const lPoke = pokemon.map(poke => poke.toLowerCase())

// console.log(lPoke)