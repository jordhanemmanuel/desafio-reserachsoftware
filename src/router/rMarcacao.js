const express = require('express')
const router = new express.Router()
const marcarcao = require('../utils/marcacao')
const util = require('../utils/util')

router.get("", (req,res) => {
    res.render('index', {
        title: 'Desafio Research Software Engineer',
        name: 'Jordhan Emmanuel',
        info: 'Insira o código da Empresa e Colaborador que deseja registrar a marcação:'
    })    
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre',
        text: 'Aplicação criada para o desafio de Research Software Engineer, no qual é proposto uma chamada para fazer uma marcação de ponto em um sistema legado.'
    })
})

router.post('/realizarMarcacao', (req, ret) => {
    const payloadData = req.body
    //console.log("entrou no post")
    //console.log(payloadData)
    if (!payloadData.includedAt) {
        //console.log("Data de marcação não encontrada, gerando nova data...")
        payloadData.includedAt = util.getDatAtu()
    }
    marcarcao.addMarcacao(payloadData, (err, res) => {
        if (!res) {
            return ret.status(406).json({
                error:err, errorID: 0, errorMessage: 'Não foi possível realizar a marcação'    
            })
        }

        const {status, statusText, data} = res

        ret.status(200).json({
            mensagemRetorno: "Marcação realizada com sucesso!",
            status,
            statusText,
            dados: data,
            dadosMarcacao: payloadData
        })

    })
})

module.exports = router