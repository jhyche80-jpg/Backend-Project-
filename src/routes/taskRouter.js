const express = require('express')
const router = express.Router()
const { findAll, findOne, Update, Create, Delete } = require('../controller/projectController')

// find all
router.get('/tasks', findAll)
// find one 
router.get('tasks/:taskId', findOne)
// update a product
router.put('/tasks/:taskId', Update)
// create a product 
router.post('/tasks', Create)
// delete a product 
router.delete('/tasks/:taskId', Delete)

module.exports = router