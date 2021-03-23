//const path = require('path')
const express = require('express')
//const hbs = require('hbs')
const marcacao = require('./utils/marcacao');

const app = express()
const herokuPort = process.env.PORT || 3000

//TESTES, DELETAR DEPOIS
const testes = require('./utils/testeChamadas')
//app.use(marcacao);
app.get("", (req, res) => {
    dadosDaMarcacao = {includedAt:"2021-03-15 15:10:00", employeeId: 123, employerId: 999};
    marcacao.addMarcacao(dadosDaMarcacao, (error, response) => {
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
});

app.get("/buscaEnd", (req, res) => {
    testes.buscaEndereco("", (error, response) => {
        if (!response) {
            res.send(error)
        } else {
            res.send(response)
        }
    });
});

app.listen((herokuPort), () => {
    console.log('Server is up on port ' + herokuPort)
})