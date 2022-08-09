/* eslint-disable no-unused-vars */
import Book from './modules/constructor.js';
import * as lib from './modules/library.js';
import * as pages from './modules/variables.js';
import { DateTime } from './modules/luxon.min.js';

lib.UI.showBooks(lib.library.collection);

pages.homepage.addEventListener('click', () => {
  if (pages.Clicked === false) {
    pages.homeSection.style.display = 'block';
    pages.bookSection.style.display = 'none';
    pages.contactSection.style.display = 'none';
  }
});

pages.addNew.addEventListener('click', () => {
  if (pages.Clicked === false) {
    pages.homeSection.style.display = 'none';
    pages.bookSection.style.display = 'block';
    pages.contactSection.style.display = 'none';
  }
});

pages.contactpage.addEventListener('click', () => {
  if (pages.Clicked === false) {
    pages.homeSection.style.display = 'none';
    pages.bookSection.style.display = 'none';
    pages.contactSection.style.display = 'block';
  }
});

pages.form.addEventListener('submit', (e) => {
  if (pages.title.value === '' && pages.author.value === '') {
    pages.error.innerHTML = 'Please fill in all the fields';
    setTimeout(() => {
      pages.error.textContent = '';
    }, 3000);
  } else {
    const newBook = new Book(pages.title.value, pages.author.value);
    lib.library.addBook(newBook);
  }
  e.preventDefault();
});

// Show date and time
function updateTime() {
  const date = DateTime.now();
  const dateDiv = document.querySelector('.date');
  dateDiv.innerHTML = `${date.toLocaleString(DateTime.DATETIME_MED)}`;
}
setInterval(updateTime, 1000);
updateTime();
