
const Product = require('../models/product')

function saveProduct(req, res) {
    console.log(req.body)

    let product = new Product();

    product.titulo = req.body.titulo
    product.marca = req.body.marca
    product.modelo = req.body.modelo
    product.ref = req.body.ref
    product.precio = req.body.precio
    product.foto = req.body.foto

    product.caracteristicas.velocidad = req.body.veloclscidad
    product.caracteristicas.tamanio = req.body.tamanio
    product.caracteristicas.peso = req.body.peso


    //product.comentarios.push({data: Date,body: req.body.comentario})


    product.save((err) => {

        if (err) return res.status(500).send(`Error al salvar el producto: ${err}`)

        res.status(200).send('Producto salvado.')
    })
}


function getProducts(req, res) {

    Product.find({}, (err, products) => {

        if (err) return res.status(500).send(`Error al realizar la petición: ${err}`)

        res.status(200).send({ products })
    })

}



function getProduct(req, res) {

    let idProduct = req.params.id;

    Product.findById(idProduct, (err, product) => {

        if (err) return res.status(500).send(`Error al realizar la petición: ${err}`)
        if (!product) return res.status(404).send({ message: 'Producto no encontrado' })

        res.status(200).send({ product })
    })

}


function updateProductComent(req, res) {

    let idProduct = req.params.id;

    console.log(idProduct);
    console.log(req.body.comentario);



    Product.findByIdAndUpdate(
        idProduct,
        { $push: { "comentarios": { date: new Date(), body: req.body.comentario } } },
        (err, model) => {

            if (err) return res.status(500).send(`Error al realizar la petición: ${err}`)

            res.status(200).send({ message: 'Comentario realizado.' })
        })

}


function deleteProductComent(req, res) {

    console.log(req.params.idComment);

    let idProduct = req.params.idProduct;
    let idComment = req.params.idComment;

    Product.findByIdAndUpdate(idProduct,
        {
            $pull: { "comentarios": { _id: idComment } }
        },
        (err, model) => {

            if(err) return res.status(500).send({message: `Error al realizar la petición`})

            res.status(200).send({message: `Comentario removido.`})
        })

}

module.exports = {

    saveProduct,
    getProducts,
    getProduct,
    updateProductComent,
    deleteProductComent
}


