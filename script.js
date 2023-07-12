function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'image/000.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'image/001.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA TARDE
        img.src = 'image/002.png'
        document.body.style.background = '#515154'
    }
}