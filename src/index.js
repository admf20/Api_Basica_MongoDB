require('dotenv').config();

const app = require('./app');
require('./data_base')

async function main () {
    await app.listen(app.get('port') , () => {
        console.log('Servidor Corriendo en puerto '+app.get('port'));
    });
}

main();
