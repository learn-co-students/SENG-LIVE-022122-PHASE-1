const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];



// Selectors: 
// id: unique identifier for an element. IMPORTANT: that these are unique to one another >> # 
// class: for a group of elements that we mean to group together for either styling purposes or selecting a group of elements >> .
// tag name: element name 

// What is the DOM?
// a way to interact with the HTML docs 
// Document Object Model 
// Allows for HTML to be interactive 
// a representation of what is in the HTML file 
// a family type tree of html elements
// the middle man between our code and the web browser 
// a tree of objects 

// document: a representation of our html that we are going to use to either access elements or add to 


// how do we select elements 

// document.getElementById()
// takes in an ID as an argument, as a string 
// it will return the first match 
// it only returns 1 element 
// can only be called on document 

const pokeForm = document.getElementById('poke-form')


// document.getElementsByClassName 
// acccept the class as an argument 
// returns a collection of elements, HTMLCollection
// Array.from() to convert it to an array, so you can operate with array methods

const labels = document.getElementsByClassName('form-label')

// document.querySelector()
// returns 1 element, returns the first match
// pass in an id, class, tag property 
// do need to indicate what type of property we are searching by. if its an id, need to include the # and if its a class, need to include .
// we can also call it on elements 
// arguments should be strings 

const lectureDiv = document.querySelector('#lecture-goals')


// document.querySelectorAll()
// returns a collection of elements called a NodeList 
// accept a id, class or tag 
// can use the forEach method to iterate over this collection

const allDivs = document.querySelectorAll('div')

// console.log(allDivs)

// create elements and add them to the web page 



// this is our target. we are going to create character cards and add each one to this div 
const pokeContainer = document.querySelector('#poke-container')

// console.log(pokeContainer)


// document.createElement(element)


// have pokemon array, need to pass each element to renderPokemon()


pokemon.forEach(function(character){
  return renderPokemon(character)
})
// pokemon.forEach(character => renderPokemon(character))

function renderPokemon(char){
  // create the div element 

  const pokeCard = document.createElement('div')

  // give the div id property: `poke-${char.id}`

  pokeCard.id = `poke-${char.id}`
  pokeCard.className = 'poke-card'
  
  // slap the element on the DOM 
  // .append()
  // will accept multiple arguments 


  // .appendChild()
  // take in 1 argument only 
  // the argument MUST be a node 


  // create an img element for the pokeCard with the character img as its returned content 

  const pokeImg = document.createElement('img')

  // need a src property 

  pokeImg.src = char.img

  // need an alt text property for accessibility 

  pokeImg.alt = `${char.name} image`

  // const pokeName = document.createElement('h3');
  // pokeName.innerText = `${char.name}`;
  // pokeCard.append(pokeName);

  const pokeName = document.createElement('h3');
  pokeName.textContent = char.name;
  
  // const pokeName = document.createElement('h3');
  // pokeName.innerHTML = char.name;
  // pokeCard.append(pokeName);
  
  pokeCard.append(pokeImg, pokeName)
  pokeContainer.appendChild(pokeCard)
}


// remove elements from the DOM 
// .remove()

// 1. select the target 2. call .remove() on that target

lectureDiv.remove()


// updating elements on the DOM 

// 1. select the target that we are updating 

const header = document.querySelector('h1')
header.innerHTML = `<img id="header-img" src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" />`


