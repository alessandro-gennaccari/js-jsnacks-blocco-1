/* Secondo snack
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

var numberList = [];
var number;

for (var i = 0; i < 6; i++) {

    number = parseInt(prompt('Inserisci un Numero casuale per 6 volte'));

    if (number%2 != 0) {
        numberList.push(number);
    }
    
}

console.log(numberList);
document.write(numberList);