const axios = require('axios');

const buscaEndereco = async (cep, callback) => {
    let url = 'http://viacep.com.br/ws/'+cep+'/json/ ';
    let config = {
        'timeout': 20000,
    }
    let requisition = await axios.get(url, {timeout:20000})
    .then((res) => {
        console.log(res)
        callback(undefined, res.data)
    }, (err) =>{
        callback(err, undefined)
    });
}

module.exports = {buscaEndereco}