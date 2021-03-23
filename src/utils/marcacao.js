const axios = require('axios');

const addMarcacao = async (dadosMarcacao) => {
    const url = 'https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222';
    /*const dados = {
        url: url,
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            includedAt: dadosMarcacao.includedAt,
            employeeId: dadosMarcacao.employerId,
            employerId: dadosMarcacao.employerId
        }
    };*/
    console.log("Dados da marcação:");
    console.log(dadosMarcacao);
    const payload = {
        includedAt: dadosMarcacao.includedAt,
        employeeId: dadosMarcacao.employeeId,
        employerId: dadosMarcacao.employerId
    };
    console.log(payload);
    //retorno = await criarMarcacao(url, payload);
    let res = await axios.post(url, payload);
    console.log(res)
    return res;
    /*axios(dados).then((response) => {
        callback(undefined, response)
    }, (error) => {
        callback(error, undefined)    
    })*/

}

const criarMarcacao = async (url, payload) => {
    let res = await axios.post(url, payload);
    return res.data
}

module.exports = {addMarcacao}