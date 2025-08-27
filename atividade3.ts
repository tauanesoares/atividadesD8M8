/*
Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário,
que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
*/

import readlinesync = require("readline-sync");

const numerosLista: Set<number> = new Set<number>()

for(let i = 1; i <= 10; i++){
    numerosLista.add(readlinesync.questionInt())
}

console.log('Listar dados do set: \n')
for(let numero of numerosLista)
{
    console.log(numero);
}