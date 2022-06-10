// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

const numarray = [];
let x = 0;
while(x < 50){
    const usernumber = parseInt(prompt('Dammi un numero'));
    
    x += usernumber;

    numarray.push(usernumber);
}
console.log(numarray)