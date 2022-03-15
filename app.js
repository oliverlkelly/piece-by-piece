const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const hbs = handlebars.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))


const users = [
    {
        first_name: 'Aiden',
        last_name: 'Brennan',
        email: 'Aiden.c.b@hotmail.com',
        password: 'test'
    }
];

app.get('/', (req, res) => {
    res.render('login');
});



app.post('/login', (req, res) => {

    console.log(users[0].email)
    console.log(users[0].password)
    console.log(req.body.email)
    console.log(req.body.password)

    if (req.body.email === users[0].email || req.body.password === users[0].email.password) {
        console.log("hooray")
        res.render('test')
    }
});

app.listen(3001);