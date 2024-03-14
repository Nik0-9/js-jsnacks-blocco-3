// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array = [];
let sum = 0;
let num= 0;
while(sum<50){
     num = parseInt(prompt('Inserisci un numero'));
    sum += num;
}
console.log(sum);