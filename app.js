const express = require('express')
const cors = require('cors')
const app = express()
let port = process.env.PORT || 5000

const productsRoute = require('./routes/productsRoute')


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
app.get('/', (req, res) => {
    res.send('Api products')
})
app.use('/api/products', productsRoute)

app.listen(port)
