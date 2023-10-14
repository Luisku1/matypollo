const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const indexRoutes = require('./routes/index')

const PORT = 3000
const VIEWS_PATH = path.join(__dirname, '/views')

app.use(session({
    secret: 'matypollo',
    resave: true,
    saveUninitialized: false
}))
app.use('/css', express.static('css'))
app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')
app.use('/', indexRoutes)


app.listen(PORT, () =>
{
    console.log('SERVER IS RUNNING AT PORT ' + PORT)
})