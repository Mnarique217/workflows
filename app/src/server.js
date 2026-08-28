const express = require('express');
const booksRoutes = require('./routes/books');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Books API listening on port ${port}`);
  });
}

module.exports = app;
