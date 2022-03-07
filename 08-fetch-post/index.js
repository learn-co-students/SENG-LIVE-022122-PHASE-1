// making POST

// http verb: POST

// fetch does not make a post request by default, so we need to tell it to make a POST request

// we also need to tell it what its posting

// config object: 

// method is an HTTP verb associated with the type of request we want to make 

// headers: 
// value is an object 
// this object has 2 properties we want defined: 'Content-Type' & 'Accept'
// these two properties tells our request what type of data being sent and accepted

// body 
// this is the data we are sending 
// its going to be an object 
// we need to stringify this object because everything shared over the web is shared as a string

// fetch(url, {method: POST, headers: {'Content-Type': 'application/json, 'Accept': 'application/json'}, body: JSON.stringify({data we are sending to the server as an object})})

// object passed into fetch is called config object ((optional arg that we're going to only use when we make a request other than a GET request))


const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");
const pokeFormContainer = document.querySelector("#poke-form-container");

// The following methods will fire off on page load:

// Attach an event listener to '#poke-form' when the page loads:
pokeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  /// this is going to be our body
  let newChar = {
    name: name,
    img: img,
    likes: 0,
  };


  fetch('http://localhost:3000/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newChar)
  })

  // pessimisticly rendering the character
  // .then(function(response){
  //   return response.json()
  // })
  // .then(function(char){
  //   renderPokemon(char); // using the response from the POST request to render the new character
  //   // pessimistic rendering 
  //   console.log(char)
  // })

  // optimistic rendering: trusting the resp will be successful and rendering before we even get a response from the server
  renderPokemon(newChar)
  pokeForm.reset();
});

// Make a request to the server to retrieve and load all pokemon characters onto the DOM:
function getPokemon() {
  fetch("http://localhost:3000/characters")
    .then(function (resp) {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`${resp.status}: ${resp.statusText}`);
      }
    })
    .then(function (resp) {
      resp.forEach(function (char) {
        renderPokemon(char);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

getPokemon();

// Create a character card and append to "#poke-container":

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  pokeCard.addEventListener("click", function () {
    return showCharacter(pokemon);
  });

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likeNum = document.createElement("h3");
  likeNum.className = "likes-num";
  likeNum.textContent = pokemon.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener("click", function (e) {
    e.stopPropagation()
    ++pokemon.likes;
    likeNum.textContent = pokemon.likes;
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

  return pokeCard;
}

// The following methods will fire off when a character card gets clicked:

// Make a request to the server given a character id and return the character with associated comments. Replace the pokeContainer contents with only the clicked character card:
function showCharacter(character) {
  fetch(`http://localhost:3000/characters/${character.id}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (char) {
      let pokeCard = renderPokemon(char);
      pokeCard.id = "poke-show-card";
      // pokeCard.dataset.id = character.id;
      loadComments(pokeCard, char);
      pokeContainer.replaceChildren(pokeCard);
      pokeFormContainer.replaceChildren(commentsForm());
    });
}

function renderComment(commentsDiv, comment) {
  let li = document.createElement("li");
  li.textContent = comment.content;
  commentsDiv.append(li)
  return li;
}

function commentsForm() {
  let form = document.createElement("form");
  form.id = "comment-form";

  // attach an event listener to the #comment-form

  form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("comment form submitted!!!")
  })

  let commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.id = "comment-input";

  let label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Leave a comment: ";
  form.appendChild(label);

  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";

  form.append(commentInput, submit);

  return form;
}


function loadComments(pokeCard, char){
  const commentsDiv = document.createElement('div') 
  commentsDiv.id = `comment-card-${char.id}`

  const h4 = document.createElement('h4')
  h4.textContent = `${char.comments.length} comments:`

  commentsDiv.append(h4)
  pokeCard.append(commentsDiv)

  char.comments.forEach(function(comment){
    return renderComment(commentsDiv, comment)
  })
}
