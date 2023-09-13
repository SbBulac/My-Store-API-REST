const express = require('express')
const UsersServices = require('../services/users.service')

const router = express.Router()

const service = new UsersServices()

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const users = service.findOne(id)
  res.json(users)
})

router.post('/', (req, res) => {
  // crear un usuario
  const body = req.body
  res.status(201).json({
    message: "created",
    data: body
  })
})

router.patch('/:id', (req, res) => {
  // editar un producto
  const id = req.params
  const body = req.body
  res.status(200).json({
    message: "update",
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  // borrar un producto
  const id = req.params
  const body = req.body
  res.status(200).json({
    message: "deleted",
    data: body,
    id
  })
})

module.exports = router
