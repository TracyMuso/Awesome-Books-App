/* eslint-disable import/prefer-default-export */
// Hide and display different pages //
export const showPages = () => {
  const homepage = document.querySelector('.home');
  const addNew = document.querySelector('.add');
  const contactpage = document.querySelector('.contact');
  const homeSection = document.querySelector('#book-list');
  const bookSection = document.querySelector('#Add-book');
  const contactSection = document.querySelector('#contactUs');
  const Clicked = false;

  homepage.addEventListener('click', () => {
    if (Clicked === false) {
      homeSection.style.display = 'block';
      bookSection.style.display = 'none';
      contactSection.style.display = 'none';
    }
  });

  addNew.addEventListener('click', () => {
    if (Clicked === false) {
      homeSection.style.display = 'none';
      bookSection.style.display = 'block';
      contactSection.style.display = 'none';
    }
  });

  contactpage.addEventListener('click', () => {
    if (Clicked === false) {
      homeSection.style.display = 'none';
      bookSection.style.display = 'none';
      contactSection.style.display = 'block';
    }
  });
};
