function tabuada(){
    var numero = document.getElementById ('txtn')
    var tabuada = document.getElementById ('seltab')

    if( numero.value.length == 0 ){
        alert('Digite um numero')
    } else {
        var num = Number(numero.value)
        var c = 1 
        tabuada.innerHTML = ``
        while (c <= 10){
            var item = document.createElement ('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabuada.appendChild(item)
            c++
        }
    }



}