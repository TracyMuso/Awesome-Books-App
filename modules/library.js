/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import UI from './user.js';
import Book from './constructor.js';

export class Library {
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

export const library = new Library();
