// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array = [];
let sum = 0;
let num = 0;

while(sum <= 50){
    num = parseInt(prompt('Inserisci un numero'));
    if(!isNaN(num)){
        array.push(num);
        sum += num;
    }
}
console.log(sum);
console.log('array,',array);

/* CORREZIONE

const array = [];
let sum = 0;
while(sum<50){
    const newNum = parseInt(prompt('type a new number'));
    if(!isNan(newNum)){
        sum += newNum;
        array.push(newNum);
    }
}*/