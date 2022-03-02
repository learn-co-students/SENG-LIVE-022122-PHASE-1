// Asynchronous: out of order, not from top to bottom, will run other code until the function completes its task

// GET request
// API: application programming interface, third party api's 
// our own server, in this project we are using db.json

// endpoint: the destination we are making the request to, so where we are getting our data from 

// our endpoint(s) for today is: 
// '/characters': all of the characters in our server 

// Follows the standard for creating routes called REST:
// '/characters/:id': give us the character that matches the provided :id i.e characters/3

// HTTP Verbs: GET, POST, PATCH, DELETE

// CRUD: Create, Read, Update and Delete

// base url: http://localhost:3000/

// http://localhost:3000/characters

// Make a request to our /characters endpoint 
// Grab that data and handle it properly 
// Pass that data to renderPokemon()

// Making a request using fetch()
// NOTE!!! fetch by default makes a GET request 

// .fetch() anatomy 
// url is required when using fetch
// fetch(url) // return of this method is going to be a promise: inside of that promise is going to be a response object
// .then(function(response){
//   return response.json() // turn our JSON into a plain old JS object
// }) // return for this is ANOTHER promise 
// .then(function(data){
//   console.log(data) // inspecting did i get the correct set of data???
// })

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

pokeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // NEEDS TO CHANGE,
    name: name,
    img: img,
    likes: 0,
  };

  renderPokemon(newChar);
  pokeForm.reset();
});

function getPokemon(){
  fetch('http://localhost:3000/characters') // => promise
  .then(function(resp){
    return resp.json() // turning response into an object/ return another promise
  })
  .then(function(characters){
    characters.forEach(function(character){
      renderPokemon(character)
    })
  })
}

getPokemon()

// pokemon.forEach(function (character) {
//   renderPokemon(character);
// });

function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  // pokeCard.addEventListener("click", (e) => showCharacter(e, char));

  pokeCard.addEventListener("click", function(){
    return showCharacter(char)
  })
    

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likeNum = document.createElement("h3");
  likeNum.className = "likes-num";
  likeNum.textContent = char.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener("click", function (e) {
    e.stopPropagation()
    ++char.likes;
    likeNum.textContent = char.likes;
  });

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", function (e) {
    e.stopPropagation()
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);

  return pokeCard
}

// fire off when a character card is clicked
// want to render an individual character, the character that was clicked
// make a request upon a click to our endpoint: characters/:id
// use that response + renderPokemon() to change the contents on our web page
function showCharacter(character){

  // how do i get the character's id and use that in my endpoint 
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(function(response){
    return response.json()
  }) 
  .then(function(character){
    const pokeCard = renderPokemon(character) // return the div element
    pokeCard.id = "poke-show-card" // updatng the id for styling purpose 
    pokeContainer.replaceChildren(pokeCard)
  })

}
