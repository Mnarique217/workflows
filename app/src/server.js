const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let books = [];
let nextId = 1;

app.get('/', (req, res) => res.send('Books API'));

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  res.json(book);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body || {};
  if (!title || !author) return res.status(400).json({ error: 'Missing title or author' });
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title, author } = req.body || {};
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  if (!title && !author) return res.status(400).json({ error: 'Nothing to update' });
  const updated = Object.assign({}, books[idx]);
  if (title) updated.title = title;
  if (author) updated.author = author;
  books[idx] = updated;
  res.json(updated);
});

app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const removed = books.splice(idx, 1)[0];
  res.json(removed);
});

app.listen(port, () => {
  console.log(`Books API listening on port ${port}`);
});
