const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId

//reference for the scheme
var {PostMessage} = require('../models/postMessageModel')

//save record
router.post('/postMessages/', (req, res) => {
    
    var newRecord = new PostMessage({

        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha,

        meta1: req.body.meta1,
        meta2: req.body.meta2,
        meta3: req.body.meta3,
        valor1: req.body.valor1,
        valor2: req.body.valor2,
        valor3: req.body.valor3,

        metaNova: req.body.metaNova,
        valorNovo: req.body.valorNovo,

        nomeNovoGanho: req.body.nomeNovoGanho,
        valorNovoGanho: req.body.valorNovoGanho,
        categoriaNovoGanho: req.body.categoriaNovoGanho,
        dataNovoGanho: req.body.dataNovoGanho,
        metaNovoGanho: req.body.metaNovoGanho,

        nomeNovoGasto: req.body.nomeNovoGasto,
        valorNovoGasto: req.body.valorNovoGasto,
        categoriaNovoGasto: req.body.categoriaNovoGasto,
        dataNovoGasto: req.body.dataNovoGasto,
        metaNovoGasto: req.body.metaNovoGasto,

        alimentacao: req.body.alimentacao,
        transporte: req.body.transporte
    })

    newRecord.save((err, doc) => {
        
        if(!err) res.send(doc)
            
        else console.log('Error while creating new record: ' + JSON.stringify(err,undefined,2))
    })
})

//get all records
router.get('/postMessages/', (req, res) => {
    PostMessage.find((err,docs) =>{
        if(!err) 
            res.send(docs)
        else 
            console.log('Error while retrieving all records: ' + JSON.stringify(err,undefined,2))
    })
})

//update record
router.put('/postMessages/:id', (req, res) => {
    
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    var updatedRecord = {

        meta1: req.body.meta1 != '' ?  req.body.meta1 : res.meta1,
        meta2: req.body.meta2 != '' ?  req.body.meta2 : res.meta2,
        meta3: req.body.meta3 != '' ?  req.body.meta3 : res.meta3,
        valor1: req.body.valor1 != '' ?  req.body.valor1 : res.valor1,
        valor2: req.body.valor2 != '' ?  req.body.valor2 : res.valor2,
        valor3: req.body.valor3 != '' ?  req.body.valor3 : res.valor3,

        metaNova: req.body.metaNova != '' ?  req.body.metaNova : res.metaNova,
        valorNovo: req.body.valorNovo != '' ?  req.body.valorNovo : res.valorNovo,

        nomeNovoGanho: req.body.nomeNovoGanho != '' ?  req.body.nomeNovoGanho : res.nomeNovoGanho,
        valorNovoGanho: req.body.valorNovoGanho != '' ?  req.body.valorNovoGanho : res.valorNovoGanho,
        categoriaNovoGanho: req.body.categoriaNovoGanho != '' ?  req.body.categoriaNovoGanho : res.categoriaNovoGanho,
        dataNovoGanho: req.body.dataNovoGanho != '' ?  req.body.dataNovoGanho : res.dataNovoGanho,
        metaNovoGanho: req.body.metaNovoGanho != '' ?  req.body.metaNovoGanho : res.metaNovoGanho,

        nomeNovoGasto: req.body.nomeNovoGasto != '' ?  req.body.nomeNovoGasto : res.nomeNovoGasto,
        valorNovoGasto: req.body.valorNovoGasto != '' ?  req.body.valorNovoGasto : res.valorNovoGasto,
        categoriaNovoGasto: req.body.categoriaNovoGasto != '' ?  req.body.categoriaNovoGasto : res.categoriaNovoGasto,
        dataNovoGasto: req.body.dataNovoGasto != '' ?  req.body.dataNovoGasto : res.dataNovoGasto,
        metaNovoGasto: req.body.metaNovoGasto != '' ?  req.body.metaNovoGasto : res.metaNovoGasto,

    }

    PostMessage.findByIdAndUpdate(req.params.id, {$set: updatedRecord}, {new:true}, (err, docs) => {
        if(!err) 
            res.send(docs)
        else 
            console.log('Error while updating a record: ' + JSON.stringify(err,undefined,2))
    })
})

//delete object
router.delete('/postMessages/:id', (req, res) => {
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