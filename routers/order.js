const express = require('express')
const router = express.Router()
const Order = require('../models').order
const bcrypt = require('bcrypt')

router.get('/:userId', async (req, res, next) => {
	const limit = Math.min(req.query.limit || 25, 100)
	const offset = req.query.offset || 0

	// req.params.userId

	if (!req.body.user) {
		return res.error(400).send('you should be a user to do this')
	}

	try {
		const result = await User.findAndCountAll({
			where: {
				userId: userId
			},
			limit,
			offset
		})
		res.send({ images: result.rows, total: result.count })
		console.log(result)
	} catch (e) {
		console.log('error', e)
	}
})