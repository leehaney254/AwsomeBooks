//select the form
const form = document.querySelector('#postBook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const displayArea = document.querySelector('#showBooks');
const deleteBook = document.querySelector('.deleteBook');

/* Take the data store it  */
let storeObj = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  storeObj.title = title.value;
  storeObj.author = author.value;
  storeData();
})


/* Talha add here*/

/* Steve add here*/
