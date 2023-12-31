const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');


//Initializations
const app = express();
require('./database');  

//setting
app.set('views',path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//midlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/',require('./routers/index'));

app.listen(app.get('port'),() => {
    console.log('Server on Port', app.get('port'));
});
