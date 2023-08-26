function enviar() {
    dia = document.getElementById('Day').value
    mes = document.getElementById('Month').value
    ano = document.getElementById('Year').value

    const date = new Date()

    year = date.getFullYear("yyyy")
    anoAtual = year - ano
    
    mouth = date.getMonth("1-12")
    if (mouth>mes){
        mesAtual = mouth-mes
    }else{
        mesAtual = mes - mouth
    }
    
    day = date.getDate("1-31")
    diaAtual = day - dia
 
    spanAno = document.querySelector('#ano')
    spanAno.innerHTML = anoAtual
    localStorage.setItem('years', anoAtual)

    spanMes = document.querySelector('#mes')
    spanMes.innerHTML = mesAtual
    localStorage.setItem('mounth', mesAtual)

    spaDia = document.querySelector('dia')
    spaDia.innerHTML = diaAtual
    localStorage.setItem('days', diaAtual)

}
  



