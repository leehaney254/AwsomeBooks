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

//Display the books stpr
function displayBooks() {
  const wrapper = document.createElement('div');
  const bookShelfstr = localStorage.getItem('books');
  bookArray = JSON.parse(bookShelfstr);
  console.log(bookArray);
  bookArray.forEach((element, index) => {
    const displayTitle = document.createElement('p');
    const displayAuth = document.createElement('p');
    const deletebtn = document.createElement('div');
    const container = document.createElement('div');
    displayTitle.innerText = element.title;
    displayAuth.innerText = element.author;
    deletebtn.innerHTML = `<button onclick='removeBook(${index})'>Remove</button>`;
    deletebtn.classList.add('deleteBook');
    container.appendChild(displayTitle);
    container.appendChild(displayAuth);
    container.appendChild(deletebtn);
    wrapper.appendChild(container);
  });
  displayArea.appendChild(wrapper);
}
//remove a book
function removeBook(index) {
  console.log(`Remove Clicked ${index}`);
}