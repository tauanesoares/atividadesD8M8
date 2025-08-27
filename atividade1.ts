import readlinesync = require("readline-sync");

/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente. (use o comando sort)
*/

const listaCores: Array<String> = new Array<String>()

for(let i = 1; i <= 5; i++){
    listaCores.push(readlinesync.question('Digite uma cor: '))
}

console.log('Listar todas as cores: \n' + listaCores)

console.log('Ordernar as cores: \n' + listaCores.sort())