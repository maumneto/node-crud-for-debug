const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'UniSchedule' });
});

app.listen(port, () => {
    console.log(`Application executing in http://localhost:${port}`);
});

