import UI from './user.js';
import { Book } from './dynamic.js';

class Library {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('books')) || [];
    this.checkLength();
  }

  checkLength() {
    const empty = document.querySelector('.empty');
    if (this.collection.length === 0) {
      empty.innerHTML = 'The library is empty';
    } else {
      empty.innerHTML = '';
    }
  }

  addBook(book) {
    this.collection.push(book);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
    this.checkLength();
  }

  removeBook(id) {
    this.collection = this.collection.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
    this.checkLength();
  }
}

const library = new Library();
UI.showBooks(library.collection);
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const form = document.querySelector('.form');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    error.innerHTML = 'Please fill in all the fields';
    setTimeout(() => {
      error.textContent = '';
    }, 3000);
  } else {
    const newBook = new Book(title.value, author.value);
    library.addBook(newBook);
  }
});