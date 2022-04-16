const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const init =  require('./init.js')
const login = require('./login.js')
const books = require('./books.js');
const detail = require('./detail.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', init)
router.use('/login', login);
router.use('/books', books);
router.use('/detail', detail);

module.exports = router;
