const express = require('express')
const router = express.Router()
const { findAll, findOne, Update, Create, Delete } = require('../controller/projectController')

// find all
router.get('/tasks', findAll)
// find one 
router.get('/task/:taskId', findOne)
// update a product
router.put('/task/:taskId', Update)
// create a product 
router.post('/projects/:projectId/task', Create)
// delete a product 
router.delete('/task/:taskId', Delete)

module.exports = router