const express = require('express')
const path = require('path')
const db = require('./src/database')

const routes = require('./src/routes')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: false
}));
app.use('/static', express.static(path.join(__dirname, 'public')))


//Rotas de aplicação
app.use('/', routes)

app.listen(3000, async () => {

    await db.sync({
        force: true
    })

    console.log("Alexandria Web")
    console.log("Versão 1.0")
})