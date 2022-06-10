// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const longArray = [23, 45, 6, 27, 45, 7, 9];
const shortArray = [10, 15, 17];
//Stampo prima del while
console.log(shortArray);
console.log(longArray);

//while
while(shortArray.length < longArray.length){
    const random = Math.floor(Math.random() * 100);
    shortArray.push(random);
}
//Finito il while
console.log(shortArray);




