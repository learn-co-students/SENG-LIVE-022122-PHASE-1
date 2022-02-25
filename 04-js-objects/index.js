// What is the key difference between an array and an object?

// Creating objects:

// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like. 'img' should be an address to an img as a string.

// Retreiving values from an object

// Define a function increaseValue() that should take in 2 arguments: 'object' and 'key'. Increment the value returned from the 'key' by 1 so that every time the function is invoked, the number of likes will increment.

// Expectation: increaseValue(character, "likes") -> 1
// Expectation: increaseValue(character, "likes") -> 2
// Expectation: increaseValue(character, "likes") -> 3

// Manipulating an object

// Adding a new property and value to an existing object

// destructive

// non-destructive

// Object.assign()

// Create a function updateChar(): this function should take in three arguments: an object, a key and a value. This function should operate non-destructively so that it will return a new Object with the new property included.

// Expection: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// Removing a key/value pair from an existing object

// destructive

// non-destructive

// for...in loop

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
