//select the items
const form = document.querySelector('#postBook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const displayArea = document.querySelector('#showBooks');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  storeData() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Books(bookTitle, bookAuthor);
    // Check if local storage is empty
    if (localStorage.getItem('books') === null) {
      const bookShelf = [];
      bookShelf.push(book);
      localStorage.setItem('books', JSON.stringify(bookShelf));
    } else {
      const bookShelfstr = localStorage.getItem('books');
      const bookArray = JSON.parse(bookShelfstr);
      bookArray.push(book);
      localStorage.setItem('books', JSON.stringify(bookArray));
    }
    // Clear input
    title.value = '';
    author.value = '';
    this.displayBooks();
  }
  displayBooks() {
    const wrapper = document.createElement('div');
    const line = document.createElement('hr');
    const bookShelfstr = localStorage.getItem('books');
    const bookArray = JSON.parse(bookShelfstr);
    bookArray.forEach((element, index) => {
      const displayTitle = document.createElement('p');
      const displayAuth = document.createElement('p');
      const deletebtn = document.createElement('div');
      const container = document.createElement('div');
      displayTitle.innerText = element.title;
      displayAuth.innerText = element.author;
      deletebtn.innerHTML = `<button onclick='deleteItem(${index})'>Remove</button>`;
      deletebtn.classList.add('deleteBook');
      container.appendChild(displayTitle);
      container.appendChild(displayAuth);
      container.appendChild(deletebtn);
      wrapper.appendChild(container);
    });
    displayArea.appendChild(wrapper);
    displayArea.appendChild(line);
  }
  removeBook(index) {
    const bookShelfstr = localStorage.getItem('books');
    const bookArray = JSON.parse(bookShelfstr);
    bookArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    displayArea.innerHTML = '';
    this.displayBooks();
  }
}

/*Steve here  */

// what happens when a person presses submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Check if title and author field is empty or not
  if (title.value === "") {
    alert("Please enter a book title");
  } else if (author.value === "") {
    alert("Please enter a book author");
  } else {
    displayArea.innerHTML = '';
    const book = new Books();
    book.storeData();
  }
});
const bigBook = new Books();
deleteItem = (id) => {
  bigBook.removeBook(id);
};
window.addEventListener('load', bigBook.displayBooks());