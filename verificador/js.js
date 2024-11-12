function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano ){
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - (fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id' , 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('src', 'imagens/bebeM.jpg' )
            } else if (idade < 21){
                //jovem
                img.setAttribute ('src' , 'imagens/jovemM.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute ('src' , 'imagens/homem.jpg')
            }
            else {
                //idoso
                img.setAttribute ('src' , 'imagens/idoso.jpg')
            }
            
        }
        else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('src' , 'imagens/bebeF.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute ('src' , 'imagens/jovemF.jpg')
            } else if (idade < 50){
                //adulta
                img.setAttribute ('src' , 'imagens/mulher.jpg')
            }
            else {
                //idosa
                img.setAttribute ('src' , 'imagens/idosa.jpg')
            }
        }
        res.innerHTML = (`Detectamos ${gênero} com ${idade} anos`)
        res.appendChild (img)
        
    }
}
