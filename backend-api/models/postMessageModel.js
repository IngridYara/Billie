const mongoose = require('mongoose');

//defining db structure -> create a collection
var PostMessage = mongoose.model('PostMessage', {

    nome : {type: String},
    sobrenome : {type: String},
    telefone : {type: Number },
    email : {type: String},
    senha: {type: String},

    meta1: {type: String},
    meta2: {type: String},
    meta3: {type: String},
    valor1: {type: Number },
    valor2: {type: Number },
    valor3: {type: Number },

    metaNova: {type: String},
    valorNovo: {type: Number },

    nomeNovoGanho: { type: String },
    valorNovoGanho: { type: Number },
    categoriaNovoGanho: { type: String },
    dataNovoGanho: { type: String },
    metaNovoGanho: { type: String },

    nomeNovoGasto: { type: String },
    valorNovoGasto: { type: Number },
    categoriaNovoGasto: { type: String },
    dataNovoGasto: { type: String },
    metaNovoGasto: { type: String}
})

module.exports = {PostMessage}