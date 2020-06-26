const express = require('express')
const router = express.Router()
const Category = require('../models').category
const bcrypt = require('bcrypt')

router.get('/', async (req, res, next) => {
	const limit = Math.min(req.query.limit || 25, 100)
	const offset = req.query.offset || 0
	try {
		const result = await Category.findAndCountAll({ limit, offset })
		res.send({ images: result.rows, total: result.count })
		console.log(result)
	} catch (e) {
		console.log('error', e)
	}
})