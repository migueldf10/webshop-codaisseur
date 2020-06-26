const express = require('express')
const router = express.Router()
const User = require('../models').user
const bcrypt = require('bcrypt')
const { toJWT, toData } = require('../auth/jwt')

router.post('/', async (req, res, next) => {
	try {

		const { email, password } = req.body

		if (!email || !password) {
			return res.send('send valid user login info')
		}
		const user = await User.findOne({ where: { email } })

		if (!user) {
			return res.status(404).send('user/password doesn\'t exist')
		}

		const passwordsMatch = bcrypt.compareSync(password, user.dataValues.password)

		if (!passwordsMatch) {
			return res.status(404).send('user/password doesn\'t exist')
		}
		res.send({
			jwt: toJWT({ user }),
		});
		next()

	} catch (error) {
		console.log('error', error)
		return res.status(500).send('Error')
	}
})

module.exports = router