const express = require('express')
const productsRouter = require('./products.router')
const userssRouter = require('./user.router')
const categoriesRouter = require('./categories.router')

const routersAPI = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', userssRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routersAPI
