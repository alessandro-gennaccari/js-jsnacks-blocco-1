/* 4. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */

var array = [];
var numero;
var somma = 0;

var i = 0;
while (somma < 50) {
    numero = parseInt(prompt('Inserisci un numero'));
    if (isNaN(numero) || numero == 0) {
        alert('Sono consentiti solo numeri,\nMaggiori di 0 = "> 0"!');
        i--;
    } else {
        array.push(numero)
        somma += array[i];
    }
    i++;
}

// OPPURE CON FOR (meno bello da vedere) ed un CONTROLLO

// for (var i = 0; somma < 50; i++) {

//     numero = parseInt(prompt('Inserisci un numero'));
//     if (isNaN(numero) || numero == 0) {
//         alert('Sono consentiti solo numeri > 0!');
//         i--;
//     } else {
//         array.push(numero)
//         somma += array[i];
//     }
// }

console.log(array);
console.log(somma);