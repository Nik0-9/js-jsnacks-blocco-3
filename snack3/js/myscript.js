//scrivere una funzione che verifichi se un numero inserito dall'utente sia pari o dispari


let userNum = parseInt(prompt('inserisci un numero'));

let result = oddOrEven(userNum);
console.log(result);

function oddOrEven(number){
    if(number % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
}