const test = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const request = require('supertest');

const booksRouter = require('../routes/books');
const { resetBooks, createBook } = require('../data/books');

const app = express();
app.use(express.json());
app.use('/books', booksRouter);

function resetAppState() {
  resetBooks();
}

test('GET /books returns all books', async () => {
  resetAppState();
  createBook({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });

  const response = await request(app).get('/books');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, [{
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  }]);
});

test('POST /books creates a new resource', async () => {
  resetAppState();

  const response = await request(app)
    .post('/books')
    .send({ title: 'Dune', author: 'Frank Herbert' });

  assert.equal(response.status, 201);
  assert.deepEqual(response.body, {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbert',
  });
});
