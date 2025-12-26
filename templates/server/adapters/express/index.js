const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.app_PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})