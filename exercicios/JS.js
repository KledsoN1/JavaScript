function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('img')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        //bomdia 
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >=12 && hora <= 18) {
        //boatarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'orange'
    }
    else {
        //boanoite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'darkblue'
    }

}