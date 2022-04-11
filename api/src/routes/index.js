const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const books = require('./books.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/books', books);

module.exports = router;
