const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
    console.log('dirname is ', __dirname)
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.use('/', router);
app.listen(process.env.port || port, () => {
    console.log(`Example app listening to port ${port}`)
})

console.log('Running at Port 3000')