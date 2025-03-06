const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Quoc An and nodemon')
})

router.get('/abc', (req, res) => {
    res.send('Check abc!')
})

router.get('/hary', (req, res) => {
    // res.send('<h1>Check hary!</h1>')
    res.render('sample.ejs')
})

module.exports = router;
