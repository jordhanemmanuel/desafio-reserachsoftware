console.log('Client side javascript file is loaded!')

const marcForm      = document.querySelector('form')
const numemp        = document.querySelector('#numemp')
const numcol        = document.querySelector('#numcol')
const messageLoad   = document.querySelector('#message-load')
const msgStatus     = document.querySelector('#msg-status')
const msgEmp        = document.querySelector('#msg-empresa')
const msgCol        = document.querySelector('#msg-colab')
const msgdados      = document.querySelector('#msg-dadosmarcacao')
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
    console.log(payloadData)
    await fetch("/realizarMarcacao", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(payloadData)
    }).then(async (response) => {
        console.log("passou aqui")
        const respostinha = await response.json()
        console.log(respostinha)
    })
})

function cleanFields() {
    msgStatus.textContent     = ''
    msgEmp.textContent        = ''
    msgCol.textContent       = ''
    msgdados.textContent    = ''
}

function getDatAtu() {
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth()+1).toString(); 
    let ano = data.getFullYear();
    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    console.log(ano+"-"+mes+"-"+dia+" "+hora+":"+min+":"+sec)
    return ano+"-"+mes+"-"+dia+" "+hora+":"+min+":"+sec;
}