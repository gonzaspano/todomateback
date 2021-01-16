const express = require('express')
const cors = require('cors')

const productsRoute = require('./routes/productsRoute')

const app = express()
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000",
                    credentials: true
                }
            ]
        }
    }
}
app.use(cors(
    config.application.cors.server
))
app.use('/api/products', productsRoute)

app.listen(5000)
