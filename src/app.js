const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const herokuPort = process.env.PORT || 3000

//Define o caminho para configurações do express
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const marcacao = require('./router/rMarcacao')


// Configurando o handlebar/hbs, para que seja o motor de html e também o local dos hbs
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(marcacao)

// Setup diretorio estatico para o servidor
app.use(express.static(publicPath))

app.listen((herokuPort), () => {
    console.log('Server is up on port ' + herokuPort)
})