function carregar() {
    var idh = window.document.getElementById('idh')
    var img = window.document.getElementById('img')
    var data = new Date()
    var dia = data.getDay()
    var diaAtual = (new Date()).getDate();
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var hora =  data.getHours()
    switch(dia) {
        case 0:
          dia = "Domingo"
          break
        case 1:
          dia = "Segunda-feira"
          break
        case 2:
          dia = "Terça-feira"
          break
        case 3:
          dia = "Quarta-feira"
          break
        case 4:
          dia = "Quinta-feira"
          break
        case 5:
          dia = "Sexta-feira"
          break
        case 6:
          dia = "Sábado"
          break
        default:
          dia = "Dia inválido"
          break
      }

      switch(mes) {
        case 0:
          mes = "Janeiro"
          break
        case 1:
          mes = "Fevereiro"
          break
        case 2:
          mes = "Março"
          break
        case 3:
          mes = "Abril"
          break
        case 4:
          mes = "Maio"
          break
        case 5:
          mes = "Junho"
          break
        case 6:
          mes = "Julho"
          break
        case 7: 
          mes = "Agosto"
          break
        case 8:
          mes = "Setembro"
          break
        case 9:
          mes = "Outubro"
          break
        case 10:
          mes = "Novembro"
          break
        case 11: 
          mes = "Dezembro"
          break;          
        default:
          mes = "Dia inválido"
          break
      }

    idh.innerHTML = `Hoje é ${dia}, ${diaAtual} de ${mes} de ${ano} e a hora atual é ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        txt.innerHTML = `Bom dia`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#D9D0C1'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F2A30F'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#034AA6'
    }
}
