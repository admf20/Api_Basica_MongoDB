const mongoose = require('mongoose')

//crear la uri de mongo_db
const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/api_basisa_mongodb_test';

//hacemos la configuracion basica que es la uri y configuracion
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//utilizamos la funcion connection ya con la configuracion basica y la uri
const connection = mongoose.connection;

//abrimos una conexion con la metodo once y validamos si hay algun errror
connection.once('open', (err) => {
    if(err){
        console.log(err);   
    }else{
        console.log('Base de Datos corriendo');
    }
});
