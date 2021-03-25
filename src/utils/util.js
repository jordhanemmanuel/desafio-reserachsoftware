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

module.exports = {getDatAtu, addZero}