import { BookCollection } from './modules/bookCollection.js';
import {
  booksListPage,
  addBookPage,
  contactPage,
} from './modules/pageDispaly.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// eslint-disable-next-line no-unused-vars
new BookCollection();

const dateTime = () => {
  const date = document.querySelector('.date');
  date.innerHTML = `${DateTime.now().toLocaleString(
    DateTime.DATE_MED,
  )}, ${DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
};

dateTime();

setInterval(dateTime, 1000);

const list = document.querySelector('.list');
const addBookLink = document.querySelector('.add-new');
const contactLink = document.querySelector('.contact');

list.addEventListener('click', booksListPage);
addBookLink.addEventListener('click', addBookPage);
contactLink.addEventListener('click', contactPage);
