function tabuada(){
    var numero = document.getElementById ('txtn')
    var tabuada = document.getElementById ('seltab')
    if(numero.value.length == 0){
        alert('Por favor digite um número')
    } else{
        var num = Number (numero.value)
        tabuada.innerText = ``
        var c = 1
       while(c <= 10){
        var item = document.createElement ('option')
        item.text = (`${num} x ${c} = ${num * c}`)
        tabuada.appendChild (item)
        
        
        c++

       }

    }
}




















