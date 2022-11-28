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


//Function to store in local storage
function storeData() {
  //Check if local storage is empty
  if (localStorage.getItem('books') === null) {
    const bookShelf = [];
    bookShelf.push(storeObj);
    localStorage.setItem('books', JSON.stringify(bookShelf));
  } else {
    const bookShelfstr = localStorage.getItem('books');
    bookArray = JSON.parse(bookShelfstr);
    bookArray.push(storeObj);
    localStorage.setItem('books', JSON.stringify(bookArray));
  }
  //Clear input
  title.value = '';
  author.value = '';
  displayBooks();
}

/* Steve add here*/
