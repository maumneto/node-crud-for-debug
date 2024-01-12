const express = require('express');
const myevents = require('./event').myevents

// Instância do Express
const router = express.Router();

// Rotas
router.get('/', (req, res) => {
    res.render('index', { myevents: myevents });
});

module.exports = router;
