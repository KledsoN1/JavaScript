let valores = [1, 3, 4, 5]
valores.sort()

/*
for(let pos = 0; pos <= valores.length; pos++ ){
    console.log(`a Posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

