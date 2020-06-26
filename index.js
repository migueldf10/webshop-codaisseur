const express = require('express')
const app = express()
const jsonParser = express.json()
app.use(jsonParser)
const loginRoutes = require('./routers/login')
const signUpRoutes = require('./routers/signup')
// const userRoutes = require('./routers/user')
// const categoryRoutes = require('./routers/category')
// const variantRoutes = require('./routers/variant')
// const lineItemRoutes = require('./routers/lineItem')
// const orderRoutes = require('./routers/user')

const port = process.env.PORT || 4000


app.listen(port, () => console.log(`The iceicebaby server here... listening at http://localhost:${port}`))

app.get('/', (req, res) => res.send('Hello World!'))


app.use('/login', loginRoutes)
app.use('/signup', signUpRoutes)
// app.use('/users', userRoutes)
// app.use('/categories', categoryRoutes)
// app.use('/variants', variantRoutes)
// app.use('/lineItems', lineItemRoutes)
// app.use('/orders', orderRoutes)

