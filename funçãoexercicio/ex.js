let numero = document.getElementById ('fnum')
let lista = document.getElementById ('flista')
let res = document.getElementById ('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }

}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(numero.value) && !inList(numero.value, valores)){
       valores.push(Number(numero.value))
       let item = document.createElement ('option')
       item.text = `Valor ${numero.value} adionado`
       lista.appendChild(item)
       res.innerHTML = ``
    
       
    } else{
        alert('Valor já encontrado na lista ou inválido')
    }
    numero.value = ``
    numero.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert('Coloque valores antes de finalziar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]

            } if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p> O menor número cadastrado é o ${menor}</p>`
        res.innerHTML += `<p> o Maior número cadastrado é o ${maior}</p>`
        res.innerHTML += `<p> A soma entre todos os números é ${soma}`
        res.innerHTML += `A média dos números é de ${media}`
     
    }

}