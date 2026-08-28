const express = require('express');
const { getBooks, createBookHandler } = require('../controllers/booksController');

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBookHandler);

module.exports = router;
