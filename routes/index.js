const express = require('express')
const api = express.Router()

const ProductoCtrl = require('../controllers/product')


api.get('/product', ProductoCtrl.getProducts);
api.get('/product/:id', ProductoCtrl.getProduct)
api.post('/product', ProductoCtrl.saveProduct);
api.put('/product/:id', ProductoCtrl.updateProductComent)
api.delete('/product/:idProduct/:idComment', ProductoCtrl.deleteProductComent)

/*
api.get('/photo', (req,res) => {

    const conn = mongoose.connection;

    var gfs = Gripfs(conn.db); 
    //write content to file system
    var fs_write_stream = fs.createWriteStream('writing.jpg');
    //read from mongodb
    var readstream = gfs.createReadStream({
        filename: 'koala.jpg'
    });
    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close', function () {
        let re = readstream.pipe(res);
        console.log(re.data)


       res.send('<b>file has been written fully!</b>')

    });
})
*/


module.exports = api;