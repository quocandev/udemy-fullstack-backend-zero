const express = require('express')
const path = require('path')
require('dotenv').config()
// import express from 'express'

const app = express()
const port = process.env.PORT || 8888 //port --> hardcode .uat .prod
const hostname = process.env.HOSTNAME;

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World with Quoc An and nodemon')
})

app.get('/abc', (req, res) => {
    res.send('Check abc!')
})

app.get('/hary', (req, res) => {
    // res.send('<h1>Check hary!</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})