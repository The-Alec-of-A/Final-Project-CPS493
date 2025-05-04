const model = require('../models/summaries')
const express = require('express') 
const router = express.Router()

router
    .get('/', (req,res,next) => {
        
        model.getAll().then((data) => {
            res.send(data)
        }).catch(next)
    })

    .get('/:id', (req,res,next) => {
        const { id } = req.params;
        model.get(id).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .get('/search/:query', (req, res, next) => {
            const { query } = req.params
            const { limit, offset, sort, order } = req.query
            
            model.search(query, parseNum(limit), parseNum(offset), sort, order).then((data) => {
                res.send(data)
            }).catch(next)
        })

    .post('/', (req,res,next) =>{
        const newSummary = req.body
        model.create(newSummary).then((data) => {
            res.status(201).send(data)
        }).catch(next)
    })

    .patch('/:id', (req,res,next) => {
        const newValues = req.body
        const {id} = req.params
        model.update(id, newValues).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .delete('/:id', (req, res, next) => {
        const {id} = req.params
        model.remove(id).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .post('/seed', (req,res,next) => {
            model.seed().then((data) => {
                res.send(data)
            }).catch(next)
        })
module.exports = router

function parseNum(num){
    //if num is a number return number else return undefine
    num ? +num : undefined
}