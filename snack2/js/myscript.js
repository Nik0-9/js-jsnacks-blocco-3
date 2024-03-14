/**
 * Snack2
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

    let N = parseInt(prompt('Inserisci un numero'));
    let array = [];

    function arrayGen(N){
        let array = [];
        while(array.length<10);
        array.push(getRndInteger(1, 100));
        console.log(array);

        return array;
    }

    console.log(arrayGen(array));