const express = require('express');
const bodyParser = require('body-parser');

// Instância do Express
const app = express();
const port = 3000;

// Configurações do EJS
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('public'));
// Configurações do Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// 
const indexRoute = require('./routes/index');
const newEventRoute = require('./routes/event');

// Rotas
app.use(indexRoute);
app.use(newEventRoute);

// Servidor
app.listen(port, () => {
    console.log(`Application executing in http://localhost:${port}`);
});

