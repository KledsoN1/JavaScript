let num = [ 3, 6, 5, 2]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

var pos = num.indexOf(5)

if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`o valor se encontra na posição ${pos}`)
}