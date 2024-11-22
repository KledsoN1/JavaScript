let amigo ={
    Nome: 'José',
    sexo: 'M',
    peso: 60,
    engordar(p = 0){  
        console.log('Engordou')
        this.peso += p 
    
    }
   
}
amigo.engordar(2)
console.log(`Nome: ${amigo.Nome} peso: ${amigo.peso}kg`)