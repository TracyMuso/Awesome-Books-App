/* eslint-disable no-unused-vars */
import Book from './modules/dynamic.js';
import { showPages } from './modules/pages.js';
import * as lib from './modules/library.js';
import { library } from './modules/library.js';
import UI from './modules/user.js';
import { DateTime } from './modules/luxon.min.js';

showPages();
lib.formVal();
UI.showBooks(library.collection);
// Show date and time
function updateTime() {
  const date = DateTime.now();
  const dateDiv = document.querySelector('.date');
  dateDiv.innerHTML = `${date.toLocaleString(DateTime.DATETIME_MED)}`;
}
setInterval(updateTime, 1000);
updateTime();

window.onload = () => {

};