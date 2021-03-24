const express = require('express')
const router = new express.Router()

router.get("", (req,res) => {
    res.render('index', {
        title: 'Desafio Research Software Engineer',
        name: 'Jordhan Emmanuel',
        info: 'Insira o código da Empresa e Funcionário que deseja registrar a marcação:'
    })    
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre',
        text: 'Aplicação criada para o desafio de Research Software Engineer, no qual é proposto uma chamada para fazer uma marcação de ponto em um sistema legado.'
    })
})

router.post('/realizarMarcacao', (req, res) => {
    console.log("entrou no post")
    console.log(req.body)
    res.status(200).json({
        mensagemRetorno: "deu pau no bot"
    })
})

module.exports = router