function enviar() {
    dia = document.getElementById('Day').value
    mes = document.getElementById('Month').value
    ano = document.getElementById('Year').value
   
    const data = new Date()

    let diaAtual = String(data.getDate()).padStart(2, '0') // 1 -> 01

    let mesAtual= String(data.getMonth() + 1).padStart(2, '0') // jan = 0, 3 -> 03

    let anoAtual= data .getFullYear()//ano atual

    if(dia<diaAtual){
        diaAtual=diaAtual-dia
    }else{
        diaAtual=dia-diaAtual
    }
    
    if(mes<mesAtual){
        mesAtual=mesAtual-mes
    }else{
        mesAtual=mes-mesAtual
    }

    if(ano<anoAtual){
        anoAtual=anoAtual-ano
    }else{
        anoAtual=ano-anoAtual
    }
    
    if(mes=='12'){
        anoAtual=anoAtual-1
    }

    console.log(diaAtual+'/'+mesAtual+'/'+anoAtual)

 
    spanAno = document.querySelector('#ano')
    spanAno.innerHTML = anoAtual

    spanMes = document.querySelector('#mes')
    spanMes.innerHTML = mesAtual

    spaDia = document.querySelector('#dia')
    spaDia.innerHTML = diaAtual
}
  



