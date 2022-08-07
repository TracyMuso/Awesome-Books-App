import ds from './dataStructure.js';
import * as variables from './variables.js';
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