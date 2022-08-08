/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Book from './constructor.js';
// UI class to handle all UI events
export default class UI {
  static showBooks(collection) {
    const table = document.querySelector('.table');
    table.innerHTML = '';
    collection.forEach((book, index) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('p');
      td1.innerHTML = `<strong>"${book.title}" by ${book.author}</strong>`;
      const td2 = document.createElement('div');
      const button = document.createElement('button');
      button.className = 'remove';
      button.innerHTML = 'Remove';
      button.addEventListener('click', () => {
        library.removeBook(book.id);
      });
      td2.appendChild(button);
      row.append(td1, td2);
      table.appendChild(row);
    });
    document.querySelector('.form').reset();
  }
}