let num = [5, 8, 2, 3, 6] // array

//console.log(`Nosso vetor é o ${num}`)

num [5] = 90 //add na posição que quer

//console.log(num)

num.push(4)  //add na ultima posição

//console.log(num)
num.push(1)
num.push(7)
num.push(9)

num.sort() // colocando em ordem a array

console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


let numero = num.indexOf(92)

if (numero == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${numero}`)
}




