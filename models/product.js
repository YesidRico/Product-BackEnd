'use strict' 

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Product = new Schema({

    titulo: number,
    marca: String,
    modelo: String,
    ref: String,
    precio: {type:Number, default: 0},
    foto: String,
    caracteristicas: {
        velocidad: String,
        tamanio: {type:Number, default: 0},
        peso:{type:Number, default: 0},

    },
   
    comentarios:[{date: Date, body:String}]
})


module.exports = mongoose.model('Product',Product);