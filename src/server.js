require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888 //port --> hardcode .uat .prod
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);

//Khai báo routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})