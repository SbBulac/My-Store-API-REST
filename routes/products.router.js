const express = require('express')

const ProductServices = require('../services/product.service')

const router = express.Router()

const service = new ProductServices()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

router.get('/filter', async (req, res) => {
  res.send("Filter")
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.findOne(id)
  res.json(product)
})

router.post('/', async (req, res) => {
  // crear un producto
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
  // editar un producto
  try {
    const { id } = req.params
    const body = req.body
    const productUpdate = await service.update(id, body)
    res.json(productUpdate)

  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  // borrar un producto
  const { id } = req.params
  const productDeleted = service.delete(id)
  res.json({
    message: 'Product deleted',
    id
  })
  res.json(productDeleted)
})

module.exports = router
