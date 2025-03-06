
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World with Quoc An and nodemon');
}

const getABC = (req, res) => {
    res.send('Check abc!')
}

const getHary = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHary
}