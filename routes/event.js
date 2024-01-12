const express = require('express');
// Instância do Express
const router = express.Router();

// Configurações do Body Parser
router.use(express.json());     
router.use(express.urlencoded({ extended: true }));

var myevents = [
    {title: 'Minicurso Git e GitHub', description: 'Minicurso voltado a alunos de ADS e SI para obter conhecimento sobre o versionador git e a plataforma github', date: '2024-05-01', time: '4:00', location: 'Remoto', price: '100,00'},
    {title: 'Palestra sobre Debug', description: 'Palestra sobre como debuggar códigos de maneira fácil. Extensível a todos os alunos da instituição.', date: '2024-05-02', time: '2:00', location: 'Unichristus - Dom Luís', price: '200,00'},
    {title: 'Padrões de Projetos', description: 'Palestra sobre o que é padrões de projetos e como utilizá-los em um projeto orientado a objetos.', date: '2024-05-03', time: '2:00', location: 'Unichristus - Dom Luís', price: '300,00'},
];

// Rotas
router.get('/newevent', (_, res) => {
    res.render('new-event');
});

router.post('/newevent', verifyFormFields, (req, res) => {
    // const { title, description, date, time, location, price } = req.body;
    let event = { title: req.body.title, 
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        price: req.body.price 
    };
    myevents.push(event);
    res.redirect('/');
});

// Funções
function verifyFormFields(req, res, next) {
    const { title, description, date, time, location, price } = req.body;
    if(!title || !description || !date || !time || !location || !price) {
        return res.redirect('/newevent');
    }
    next();
}  

module.exports = router;
module.exports.myevents = myevents;