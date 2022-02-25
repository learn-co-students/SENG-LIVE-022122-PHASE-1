// Limitations that arrays provide solved by objects:

//  objects store a collection of data (rather than just a single value)
// arrays don't have keys that can help categorize values
// objects allow more defined data
// Arrays do not allow us to explicitly label elements using keys but objects do.

// Creating objects:

// const pokemon = {}

// properties: key/value

// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like. 'img' should be an address to an img as a string.

const character = {
  'name': "charmander",
  'img': "url.com",
  'likes': 0,
};


// Retreiving values from an object (read objects)

// bracket notation 
// we can use this to inject a variable to dynamically return the property value 

// when using variables as the key, need to use bracket notation to 'interpolate' the value of the variable object[variable]

// let img = "img"
// character[img]
// character = "aysan"

// dot notation 
// we have to know the actual property name 

// character.name

// let key = prompt("What do you want to know about the character")

// console.log(character.key)

// Define a function increaseValue() that should take in 2 arguments: 'object' and 'key'. Increment the value returned from the 'key' by 1 so that every time the function is invoked, the number of likes will increment.

// function increaseValue(obj, key){
//   return ++obj[key]
// }

// function increaseValue(object, key) {
//   return object[key] += 1;
// }

// const increaseValue = (object, key) => ++object[key];

// Expectation: increaseValue(character, "likes") -> 1
// Expectation: increaseValue(character, "likes") -> 2
// Expectation: increaseValue(character, "likes") -> 3

// Manipulating an object

// Adding a new property and value to an existing object

// destructive

// using bracket notation or dot notation 

// character.abilities = "thunderbolt"
// character["abilities"] = "thunderbolt"

// non-destructive

// spread operator

// {...existingObj, key:value}

// let newChar = {...character, abilities: "thunderbolt", test: "testing"}

// Object.assign()

// Object.assign(target, existingObj, additions)

// let newChar = Object.assign({}, character, {abilities: "thunderbolt", testing: "testing"})

// Create a function updateChar(): this function should take in three arguments: an object, a key and a value. This function should operate non-destructively so that it will return a new Object with the new property included.

// function updateChar(obj, key, value){
//   // return {...obj, [key]:value}
//   return Object.assign({}, obj, {[key]: value})
// }

// Expection: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// Removing a key/value pair from an existing object

// destructive

// delete obj[key]

// delete character['name']
// delete character.name

// non-destructive

// let newChar = {...character}
// delete newChar.name 

// for...in loop

// for (const key in object){

// }

// cycling through the properties of an object
// for (const k in character){
//   console.log(`${k}: ${character[k]}`)
// }

// Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property

// Expectation: charDetails(character) -> name: Pikachu img: www.img.com likes: 0

// Write a function printAbilities that accepts a character object as an argument and returns a list of the characters abilities as a string.  Use the provided pikachu object to test.

// Expectation: printAbilities(pikachu) -> "static, lightning-rod"

const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

// BONUS: Modify printAbilities so that it returns the string as: 'Abilities: static, lightning-rod'


function printAbilities(obj){
  // return the list of abilities as a string 
  // "static, lightning-rod"
  // join 
  // .push 
  let arr = []
  obj.abilities.forEach(object => {
        arr.push(object.name)
    })

    let str = arr.join(", ")
    console.log(str)
    console.log(arr)
    return str
}


console.log(printAbilities(pikachu))