const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} : ${req.url} `);
   // res.render('maintainance-message.hbs');
    next();
})
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
   // return 'test';
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!!</h1>');
    res.send({name:'Piyush'});
});
app.get('/porjects', (req, res) => {
    // res.send('<h1>Hello Express!!</h1>');
    res.render('porjects.hbs', {
        pageTitle:'Projects'
    });
});
app.get('/about', (req, res) => {
 res.render('about.hbs', {
     pageTitle:'About Page'
    // 
 }); 
});
app.listen(port,() => {
    console.log(`Server is listing on localhost ${port} port : `);
});


