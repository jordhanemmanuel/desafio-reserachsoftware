const axios = require('axios');

const addMarcacao = async (dadosMarcacao, callback) => {
    let url = 'https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222';

    //console.log("Dados da marcação:");
    const payload = {
        includedAt: dadosMarcacao.includedAt,
        employeeId: dadosMarcacao.employeeId,
        employerId: dadosMarcacao.employerId
    };
    //console.log(payload);
    let res = await axios.post(url, payload, {timeout:20000})
    .then((res) => {
        callback(undefined, {status: res.status, statusText: res.statusText, data: res.data})
    }, (err) =>{
        callback(err, undefined)
    });
}

module.exports = {addMarcacao}