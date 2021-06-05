require('dotenv').config();

const app = require('./app');
require('./data_base')

async function main () {
    await app.listen(3000, () => {
        console.log('Servidor Corriendo');
    });
}

main();
