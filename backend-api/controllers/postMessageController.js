const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId

//reference for the scheme
var {PostMessage} = require('../models/postMessageModel')

//save record
router.post('/postmessages/', (req, res) => {
    
    var newRecord = new PostMessage({

        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha,      
      
    })

    newRecord.save((err, doc) => {
        
        if(!err) res.send(doc)
            
        else console.log('Error while creating new record: ' + JSON.stringify(err,undefined,2))
    })
})

//get all records
router.get('/postmessages/', (req, res) => {

    PostMessage.find((err,docs) =>{
        if(!err) 
            res.send(docs)
        else 
            console.log('Error while retrieving all records: ' + JSON.stringify(err,undefined,2))
    })
})

//update record
router.put('/postmessages/:id', (req, res) => {
    
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)
       
    var updatedRecord = {

        metas: {

            descricao:  req.body.descricao != '' ?  req.body.descricao : res.descricao,
            valor_alvo: req.body.valor_alvo != '' ?  req.body.valor_alvo : res.valor_alvo,
        }
    }    
    
    PostMessage.updateOne( { _id: req.params.id }, {$push: updatedRecord}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while updating a record: ' + JSON.stringify(err,undefined,2))
    })
})

router.put('/postmessages/:id/inserir_transacoes', (req, res) => {
    
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)
       
    var updatedRecord = {

        transacoes: {

            data: req.body.data != '' ?  req.body.data : res.data,
            titulo: req.body.titulo != '' ?  req.body.titulo : res.titulo,
            valor: req.body.valor != '' ?  req.body.valor : res.valor,
            categoria: req.body.categoria != '' ?  req.body.categoria : res.categoria,
            meta: req.body.meta != '' ?  req.body.meta : res.meta,
            tipo: req.body.tipo != '' ?  req.body.tipo : res.tipo,
        },
    }    
    
    PostMessage.updateOne( { _id: req.params.id }, {$push: updatedRecord}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while updating a record: ' + JSON.stringify(err,undefined,2))
    })
})

//delete object
router.delete('/postmessage/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    PostMessage.findByIdAndDelete(req.params.id, (err, docs) => {
        if(!err) 
            res.send(docs)
        else 
            console.log('Error while deleting a record: ' + JSON.stringify(err,undefined,2))
    })
})

module.exports = router;