/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

// UI class to handle all UI events
class UI {
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