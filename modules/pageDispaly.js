const bookList = document.querySelector('.all-books');
const addBookForm = document.querySelector('.add-book-box');
const contact = document.querySelector('.contact-me-box');

export const booksListPage = (e) => {
  e.preventDefault();
  bookList.classList.remove('hidden');
  addBookForm.classList.add('hidden');
  contact.classList.add('hidden');
};

export const addBookPage = (e) => {
  e.preventDefault();
  addBookForm.classList.remove('hidden');
  bookList.classList.add('hidden');
  contact.classList.add('hidden');
};

export const contactPage = (e) => {
  e.preventDefault();
  contact.classList.remove('hidden');
  bookList.classList.add('hidden');
  addBookForm.classList.add('hidden');
};
