# JavaScript Functions

### Warm Up Question

What are JavaScript functions and why do we use them?

## Lecture Outline

- Declaring vs invoking functions
- Function Declarations vs Function Expressions vs Arrow Functions
- Function nuances
- First Class Functions vs High Order Functions
- Callback Functions

## Objectives

- Understand the importance of functions in JS and the nuances of how functions work
- Discuss what is meant by first-class function and why it matters
- Create and use callback functions
- Understand function scope vs global scope

## Deliverables

1. Write a function `loadPage()` using function declaration that will:

- Log: "page has loaded, run the program", to the console once the page has loaded.
- Test the function in the console.

2. Write a function `renderPokemon()` using function declaration that will:

- Accept 'character' as a parameter.
- Log: 'Rendering <character>' with character being replaced with the value of the parameter.
- Test the function in the console.

- Example: `renderPokemon("Pikachu")` ➞ 'Rendering Pikachu'

3. Write a function `convert()`:

- Accepts 'minutes' as a paramater
- 'minutes' will an integer value
- Convert the integer to seconds

- Example: convert(6) ➞ 360

4. (Stretch Challenge) Write a function `compareFunctions()` that will:

- Be passed two functions:`first` and `second`.
- `compareFunctions()` should call each function and return a string indicating which function returned the larger number.

  - If `first()` returns the larger number, return the string "First Function is Higher!".
  - If `second()` returns the larger number, return the string "Second Function is Higher!".
  - If the functions return the same number, return the string "Draw!".

  - Example: compareFunctions(() => 1, () => 10) ➞ "Second Function is Higher!"
  - Example: compareFunctions(() => 10, () => 1) ➞ "First Function is Higher!"
  - Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

### Resources

- [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
