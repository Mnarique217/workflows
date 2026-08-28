const { listBooks, createBook } = require('../data/books');

function getBooks(req, res) {
  return res.json(listBooks());
}

function createBookHandler(req, res) {
  const { title, author } = req.body || {};

  if (!title || !author) {
    return res.status(400).json({ error: 'Missing title or author' });
  }

  const book = createBook({ title, author });
  return res.status(201).json(book);
}

module.exports = {
  getBooks,
  createBookHandler,
};
