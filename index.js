/* eslint-disable no-unused-vars */
import * as variables from './modules/dynamic.js';
import { showPages } from './modules/pages.js';
import * as val from './modules/user.js';
import ds from './modules/library.js';
import { DateTime } from './modules/luxon.min.js';

showPages();
// Show date and time
window.onload = () => {
  const date = new Date();
  date.setDate(date.getDate());
  document.querySelector('.date').innerHTML = date;

  function updateTime() {
    const time = document.getElementsByClassName('date');
    const datestring = new Date().toLocaleString();
    const newString = datestring.replace(', ', ' -');
    time.textContent = newString;
  }
  setInterval(updateTime, 1000);
};