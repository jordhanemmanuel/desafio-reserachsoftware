console.log('Client side javascript file is loaded!')

const marcForm      = document.querySelector('form')
const numemp        = document.querySelector('#numemp')
const numcol        = document.querySelector('#numcol')
const messageLoad   = document.querySelector('#message-load')
const msgStatus     = document.querySelector('#msg-status')
const msgEmp        = document.querySelector('#msg-empresa')
const msgCol        = document.querySelector('#msg-colab')
const msgdados      = document.querySelector('#msg-dadosmarcacao')
const msgTitRet     = document.querySelector('#msg-titRet')
const msgTxtRet     = document.querySelector('#msg-txtRet')
const msgTitJson    = document.querySelector('#msg-titJson')
const msgTxtJson    = document.querySelector('#msg-txtJson')
const urlInit       = "http://localhost:3000"
const auxEmp        = msgEmp.textContent
const auxCol        = msgCol.textContent
const auxDados      = msgdados.textContent

cleanFields()

marcForm.addEventListener('submit', async (e) => { //e é abraviação para event
    e.preventDefault() //se nao botar esse código, a pagina da reload no submit
    cleanFields()
    let datAtu = getDatAtu()
    messageLoad.textContent += 'Procurando...   '
    let payloadData = {
        includedAt: datAtu, 
        employeeId: numemp.value, 
        employerId: numcol.value    
    }
    console.log("Payload enviado: ");
    console.log(payloadData)
    await fetch("/realizarMarcacao", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(payloadData)
    }).then(async (response) => {
        await response.json().then((data) => {
            messageLoad.textContent = '';
            if (data.error) {
                msgStatus.textContent = data.error    
            } else {
                msgStatus.textContent = data.mensagemRetorno
                msgEmp.textContent = auxEmp + data.dadosMarcacao.employerId
                msgCol.textContent = auxCol + data.dadosMarcacao.employeeId
                msgdados.textContent = auxDados + data.dadosMarcacao.includedAt
                msgTitRet.textContent = 'Retorno da API: '
                msgTxtRet.textContent = JSON.stringify(data.dados)
                msgTitJson.textContent = 'Retorno total: '
                msgTxtJson.textContent = JSON.stringify(data, null, 2)
            }
            console.log("Payload retornado: ")
            console.log(data)
        })
    })
})

function cleanFields() {
    msgStatus.textContent     = ''
    msgEmp.textContent        = ''
    msgCol.textContent       = ''
    msgdados.textContent    = ''
}

const getDatAtu = () => {
    let date = new Date();
    let dia = date.getDate();
    let mes = (date.getMonth()+1); 
    let ano = date.getFullYear();
    let hora = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    dia = addZero(dia, 2);
    mes = addZero(mes, 2);
    hora = addZero(hora, 2);
    min = addZero(min, 2);
    sec = addZero(sec, 2);
    return ano+"-"+mes+"-"+dia+" "+hora+":"+min+":"+sec;
}

const addZero = (num, qtd) => {
    resultado = num.toString()
    tamanho = resultado.length
    for (tamanho; tamanho < qtd; tamanho++) {
        resultado = "0"+resultado;
    }
    return resultado
}