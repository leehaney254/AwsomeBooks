// select the form
const form = document.querySelector('#postBook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const displayArea = document.querySelector('#showBooks');

// Display the books stpr
function displayBooks() {
  const wrapper = document.createElement('div');
  const bookShelfstr = localStorage.getItem('books');
  const bookArray = JSON.parse(bookShelfstr);
  bookArray.forEach((element, index) => {
    const displayTitle = document.createElement('p');
    const displayAuth = document.createElement('p');
    const deletebtn = document.createElement('div');
    const container = document.createElement('div');
    const line = document.createElement('hr');
    displayTitle.innerText = element.title;
    displayAuth.innerText = element.author;
    deletebtn.innerHTML = `<button onclick='removeBook(${index})'>Remove</button>`;
    deletebtn.classList.add('deleteBook');
    container.appendChild(displayTitle);
    container.appendChild(displayAuth);
    container.appendChild(deletebtn);
    container.appendChild(line);
    wrapper.appendChild(container);
  });
  displayArea.appendChild(wrapper);
}

/* Take the data store it  */
const storeObj = {};

// Function to store in local storage
function storeData() {
  // Check if local storage is empty
  if (localStorage.getItem('books') === null) {
    const bookShelf = [];
    bookShelf.push(storeObj);
    localStorage.setItem('books', JSON.stringify(bookShelf));
  } else {
    const bookShelfstr = localStorage.getItem('books');
    const bookArray = JSON.parse(bookShelfstr);
    bookArray.push(storeObj);
    localStorage.setItem('books', JSON.stringify(bookArray));
  }
  // Clear input
  title.value = '';
  author.value = '';
  displayBooks();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  storeObj.title = title.value;
  storeObj.author = author.value;
  displayArea.innerHTML = '';
  storeData();
});

// remove a book
function removeBook(index) {
  const bookShelfstr = localStorage.getItem('books');
  const bookArray = JSON.parse(bookShelfstr);
  bookArray.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(bookArray));
  displayArea.innerHTML = '';
  displayBooks();
}

window.addEventListener('load', displayBooks);

if ('cl' === 'clz') {
  removeBook(1);
}