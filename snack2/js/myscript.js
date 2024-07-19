/**
 * Snack2
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

    const N = parseInt(prompt('Inserisci un numero'));
    
    for(let i=0; i<N ; i++){
        // console.log(arrayGen());
        let array = arrayGen();
        console.log(array); 
    }

    function arrayGen(){
        let newarray = [];
        for(let i=0; i<10; i++){
            newarray.push(getRndInteger(1,100));
        }
        return newarray;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }