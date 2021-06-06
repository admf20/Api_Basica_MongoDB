const express = require('express');
const app = express();

//setting
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(express.json()); //para que la api sepa identificar formatos json

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/books', require('./routes/books'));

module.exports = app;