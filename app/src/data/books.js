let books = [];
let nextId = 1;

function listBooks() {
  return books;
}

function createBook({ title, author }) {
  const book = { id: nextId++, title, author };
  books.push(book);
  return book;
}

function resetBooks() {
  books = [];
  nextId = 1;
}

module.exports = {
  listBooks,
  createBook,
  resetBooks,
};
