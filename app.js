const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('public'));

const myevents = [
    {title: 'Event 1', description: 'Description 1', date: '2021-05-01', time: '10:00', location: 'Location 1', price: '100,00'},
    {title: 'Event 2', description: 'Description 2', date: '2021-05-02', time: '11:00', location: 'Location 2', price: '200,00'},
    {title: 'Event 3', description: 'Description 3', date: '2021-05-03', time: '12:00', location: 'Location 3', price: '300,00'},
]

app.get('/', (req, res) => {
    res.render('index',{ myevents: myevents });
});

app.listen(port, () => {
    console.log(`Application executing in http://localhost:${port}`);
});

