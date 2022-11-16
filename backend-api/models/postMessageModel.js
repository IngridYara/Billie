const mongoose = require('mongoose');

//defining db structure -> create a collection
var PostMessage = mongoose.model('PostMessage', {

    nome : {type: String},
    sobrenome : {type: String},
    telefone : {type: Number },
    email : {type: String},
    senha: {type: String},

    transacoes: [
        {
            id:{type: mongoose.ObjectId},
            data: {type: Date, default: Date.now},
            titulo: {type: String},
            valor: {type: Number },
            categoria: {type: String},
            meta: {type: String},
            tipo: {type: String},
        }
    ],

    metas: [
        {
            id:{type: mongoose.ObjectId},
            descricao: {type: String},
            valor_alvo: {type: Number },
            valor_atual: {type: Number },
        }
    ]
})

module.exports = {PostMessage}