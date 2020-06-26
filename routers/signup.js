const express = require('express')
const router = express.Router()
const User = require('../models').user
const bcrypt = require('bcrypt')

router.post('/', async (req, res, next) => {
	try {

		const { fullName, address, email, password } = req.body

		if (!fullName || !address || !email || !password) {
			return res.send('send valid user info')
		}
		const hasedPassword = bcrypt.hashSync(password, 10);
		const user = await User.create({ fullName, address, email, password: hasedPassword })
		res.send(user);
		next()

	} catch (error) {
		console.log('error', error)
		return res.status(500).send('Error')
	}
})

module.exports = router