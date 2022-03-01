// static webpage: there are no events really attached to it. not very interactive 

// dynamic webpage: interactive, we have events, we have teh ability to change things that are rendered  

// events: some interaction with our html elements 

// event types: click, submit, mouseover, keydown 

// event listeners: attach to an event type to an element so that it triggers some response 
// .addEventListener() : invoke it on our target, takes in 2 arguments: 1. event type, 2. callback function(event handler): trigger some response to the event

// event handler: the callback function provided to the .addEventListener method, and its responsible for doing something after the event is triggered 

// event object: an object that is passed to the event handler, event.target => the element that triggered the event


// likesBttn.addEventListener("click", function(e){
// inside we have access to event object(e)
//  // do something 
// })

// work flow 

// 1. find our target(the element we are attaching an event to)
// 2. attach the event to the target and provide 2 things: event type, and the response 

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

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form")

pokeForm.addEventListener("submit", function(e){

  // stop the refresh that happens when a form submits
  e.preventDefault()

  //  grab the form field values 
  // .value is going to return the text that the form was submitted with, the text inside the form fields 

  const name = document.querySelector('#name-input').value
  const img = document.querySelector('#img-input').value

  // create a new character object with those values 
  const newChar =   {
    id: 6, // NEEDS TO CHANGE
    name: name,
    img: img,
    likes: 0,
  }

  // render the character onto the DOM 

  renderPokemon(newChar)
})


pokemon.forEach(function (character) {
  renderPokemon(character);
});

function renderPokemon(char) { // character object 
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement('h3')
  pokeLikes.textContent = "Likes: "

  const likesNum = document.createElement('h5')
  likesNum.className = "likes-num"
  likesNum.textContent = char.likes

  const likesBttn = document.createElement('button')
  likesBttn.className = "likes-bttn"
  likesBttn.textContent = "♥"

  // we are using the element we created to attach an event to it
  // benefit: we dont need to select the element again
  // benefit: we have access to the character object
  likesBttn.addEventListener("click", function(){
    // increment the characters number of likes 
    ++char.likes

    // char.likes += 1 

    // update the DOM to reflect the new number of likes 
    likesNum.textContent = char.likes
  })

  const deleteBttn = document.createElement('button')
  deleteBttn.className = "delete-bttn"
  deleteBttn.textContent = "Delete"
  deleteBttn.addEventListener('click', function(){ 
    pokeCard.remove()
  })

  // deleteBttn.addEventListener(`click`,(e)=>{
  //   e.target.parentElement.remove()})


  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}
