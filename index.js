const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
/* const Gripfs = require('gridfs-stream')
var fs = require('fs');
Gripfs.mongo = mongoose.mongo;*/

mongoose.connect(config.db, function (err)  {

    if (err) return console.log(`Error al establecer la conexion: ${err}`);

    console.log('Conexión a la db establecida');
});


app.listen(config.port, () => {

    console.log(`Corriendo en http://localhost:${config.port}`)
}) 