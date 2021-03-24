const path = require('path')
const express = require('express')
const hbs = require('hbs')
const directmarcacao = require('./utils/marcacao');
const testes = require('./utils/testeChamadas')

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
/*
app.get("", (req, res) => {
    dadosDaMarcacao = {includedAt:"2021-03-15 15:10:00", employeeId: 123, employerId: 999};
    directmarcacao.addMarcacao(dadosDaMarcacao, (error, response) => {
        if (!response) {
            res.send(error)
            console.log('Status não ok:')
            console.log(error)
        } else {
            res.send(response)
            console.log('Status ok:')
            console.log(response)
        }
    });
});*/

/*app.get("/buscaEnd", (req, res) => {
    testes.buscaEndereco("", (error, response) => {
        if (!response) {
            res.send(error)
        } else {
            res.send(response)
        }
    });
});*/

app.listen((herokuPort), () => {
    console.log('Server is up on port ' + herokuPort)
})