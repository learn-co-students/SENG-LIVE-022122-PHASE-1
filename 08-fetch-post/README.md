# POST with fetch

### Objectives

- Make POST requests with values submitted through HTML forms

- POST new objects using .fetch()

- Render new data to the DOM

### Using JSON Server

- Install JSON Server by running the following command in the terminal: `npm install -g json-server`
- For today's exercise, to start the JSON server, run `json-server --watch db.json --routes routes.json` while in the directory that contains the `db.json` file i.e. `SENG-LIVE-013122-phase-1/07-async-fetch`
- For this project, we will use the following endpoint: `http://localhost:3000/pokemon`

### Warm up exercise

1. Create a function `loadComments()`:

- Accepts two parameters, pokeCard and character

- Create a new div element and store in the variable 'commentsDiv'.

- Assign the id `comment-card-${char.id}` to the commentsDiv.

- Create a new `h4` element and store in the variable `h4`. The new header should return the textContent: `{2} comments:` where the number reflects how many comments each character has associated.

- Append the `h4` element to `commentsDiv`

- Append the `commentsDiv` to the `pokeCard`

- Inspect the `character` parameter and think about how each comment associated with the character can be passed to the `renderComment` function that has been defined. 

- Comment back in line 104 to test if comments will render to the DOM when a character card is clicked

### Deliverables

1. Submit a POST request with a new pokemon character and append to the DOM

2. Submit a POST request with a new comment and append to the DOM

### Resources

- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
