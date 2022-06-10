// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// ciclo For
// let sum = 0;

// for(let i = 0; i < 5; i++){
//     const number = parseInt(prompt('Inserisci il numero'));
//     const thisNumber = number ;
//     sum += thisNumber;
// }
 
// document.getElementById('result').innerHTML = sum ;

//While

let sum = 0;
let i = 0;

while(i < 5){
    const ask =  parseInt(prompt('Inserisci il numero'));
    const number = ask ;
    sum += number;
    i++
}

document.getElementById('result').innerHTML = sum;