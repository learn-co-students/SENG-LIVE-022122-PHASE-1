const BASE_URL = "http://localhost:3000";

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");
const pokeFormContainer = document.querySelector("#poke-form-container");

const createConfigObj = (method, body) => {

  const configObj = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
   body: JSON.stringify(body)
  }

  return configObj
}

const createPokemon = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  // ES6: simple object construction
  // const newChar = {
  //   name: name,
  //   img: img,
  //   likes: 0,
  // };

  // updated to:
  const newChar = {
    name, // when this gets compiled, compiler will read it: name: name
    img,
    likes: 0,
  };

  // pessimistic rendering:
  let resp = await fetch(`${BASE_URL}/characters`, createConfigObj("POST", newChar));
  let character = await resp.json(); // this will wait to complete before line 37 executes
  renderPokemon(character);

  // optimistically: no need for async/await
  // we just simply make the fetch request, and render the character using the newChar objt
  // fetch("http://localhost:3000/characters", configObj);
  // renderPokemon(newChar)
  pokeForm.reset();
};

const getPokemon = async () => {
  try {
    let resp = await fetch(`${BASE_URL}/characters`);
    if (resp.ok) {
      let characters = await resp.json();
      characters.forEach(renderPokemon);
    } else {
      throw new Error(`${resp.status}: ${resp.statusText}`);
    }
  } catch (err) {
    console.log(err);
  }
  // fetch("http://localhost:3000/characters")
  // .then(function (resp) {
  //   if (resp.ok) {
  //     return resp.json();
  //   } else {
  //     throw new Error(`${resp.status}: ${resp.statusText}`);
  //   }
  // })
  // .then(function (resp) {
  //   resp.forEach(function (char) {
  //     renderPokemon(char);
  //   });
  // })
  // .catch(function (err) {
  //   console.log(err);
  // });
};

const init = () => {
  // pokeForm.addEventListener("submit", (event) => createPokemon(event));
  pokeForm.addEventListener("submit", createPokemon);
  getPokemon();
};

init();

const createImgEl = (src, alt) => {
  let img = document.createElement("img");
  img.src = src;
  img.alt = `${alt} image`;
  return img;
};

// ES6 feature: default arguments: className = "pokedex"
const createH3El = (textContent, className) => {
  let h3 = document.createElement("h3");
  h3.textContent = textContent;

  // if (className){
  //   h3.className = className
  // }

  // ternary operators
  className ? (h3.className = className) : null;

  return h3;
};

const createBttn = (textContent, className, eventHandler) => {
  const bttn = document.createElement("button");
  bttn.className = className;
  bttn.textContent = textContent;
  bttn.addEventListener("click", eventHandler);
  return bttn;
};

const handleLike = async (e, pokemon, likeNum) => {
  e.stopPropagation();
  ++pokemon.likes;

  let resp = await fetch(`${BASE_URL}/characters/${pokemon.id}`, createConfigObj("PATCH", { likes: pokemon.likes }));
  let character = await resp.json();
  likeNum.textContent = character.likes;
};

const handleDelete =  async (e, pokemon, pokeCard) => {
  e.stopPropagation();

  let resp = await fetch(`http://localhost:3000/characters/${pokemon.id}`, createConfigObj("DELETE", {}));
  resp.ok ? pokeCard.remove() : null;
};

const createDiv = (id, className) => {
  let div = document.createElement("div");
  div.id = id;
  className ? (div.className = className) : null;
  return div;
};

function renderPokemon(pokemon) {
  const pokeCard = createDiv(`poke-${pokemon.id}`, "poke-card");
  pokeCard.addEventListener("click", function () {
    return showCharacter(pokemon);
  });
  const pokeImg = createImgEl(pokemon.img, pokemon.name);
  const pokeName = createH3El(pokemon.name);
  const pokeLikes = createH3El("Likes: ");
  const likeNum = createH3El(pokemon.likes, "likes-num");
  const likesBttn = createBttn("♥", "like-bttn", (e) =>
    handleLike(e, pokemon, likeNum)
  );
  const deleteBttn = createBttn("delete", "delete-bttn", (e) =>
    handleDelete(e, pokemon, pokeCard)
  );

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);

  return pokeCard;
}

function showCharacter(character) {
  fetch(`http://localhost:3000/characters/${character.id}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (char) {
      let pokeCard = renderPokemon(char);
      pokeCard.id = "poke-show-card";
      pokeCard.dataset.id = character.id;
      loadComments(pokeCard, char);
      pokeContainer.replaceChildren(pokeCard);
      pokeFormContainer.replaceChildren(commentsForm());
    });
}

function renderComment(commentsDiv, comment) {
  let li = document.createElement("li");
  li.textContent = comment.content;
  commentsDiv.append(li);
  return li;
}

function commentsForm() {
  let form = document.createElement("form");
  form.id = "comment-form";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const content = document.querySelector("#comment-input").value;
    const characterId = parseInt(
      document.querySelector("#poke-show-card").dataset.id
    );

    const newComment = {
      content: content,
      characterId: characterId,
    };

    fetch(" http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (comment) {
        const commentsDiv = document.querySelector(
          `#comment-card-${characterId}`
        );
        renderComment(commentsDiv, comment);
        form.reset();
      });
  });

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

function loadComments(pokeCard, char) {
  const commentsDiv = document.createElement("div");
  commentsDiv.id = `comment-card-${char.id}`;

  const h3 = createH3El(`${char.comments.length} comments:`);

  commentsDiv.append(h3);
  pokeCard.append(commentsDiv);

  char.comments.forEach(function (comment) {
    return renderComment(commentsDiv, comment);
  });
}
