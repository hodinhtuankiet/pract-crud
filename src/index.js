const express = require('express')
const app = express()
// const handlebars = require('express-handlebars')
const exphbs = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')
const port = 3000
const route = require('./routes')
const db = require('./config/db')
// JWT
const cors = require("cors");
// 123213

const mongoose = require("mongoose");
// Set strictQuery option to prepare for Mongoose 7
mongoose.set('strictQuery', true);


const cookieParser = require("cookie-parser")
// Connect database 
db.connect();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(methodOverride('_method'))
app.use(cors());
app.use(cookieParser());

// Template engine
const hbs = exphbs.create({
    extname: '.handlebars',
    layoutsDir: 'src/resources/views/layouts',
    defaultLayout: 'main',
    helpers: {
        sum: (a, b) => a + b,
    },
})
// a+ b

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

route(app);
// ROUTE --> index.js/routes ex:/news --> news/js --> controller 
// controller have send , show , function....

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
