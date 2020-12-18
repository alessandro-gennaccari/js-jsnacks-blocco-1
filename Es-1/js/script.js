/* Primo snack
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while */

// CON FOR
var numberList = [];
var number;
for (var i = 0; i < 5; i++){
    number = parseInt(prompt('Con ciclo for e array: Inserisci un numero casuale per 5 volte'));
    numberList.push(number);
}

console.log(numberList);

var somma = 0;
for (var i = 0; i < numberList.length; i++) {
    somma += numberList[i];
}

console.log(somma);

/* ---------------------------------------------------------------------------------- */

// CON WHILE
var numberList = [];
var number;

var i = 0;
while (i < 5) {
    number = parseInt(prompt('Con ciclo while e array: Inserisci un numero casuale per 5 volte'));
    numberList.push(number);
    i++;
}

console.log(numberList);

var somma = 0;
var i = 0;
while (i < numberList.length) {
    somma += numberList[i];
    i++;
}

console.log(somma);

/* ---------------------------------------------------------------------------------- */

// Senza Array con for
var somma = 0;
var number;

for (var i = 0; i < 5; i++){
    number = parseInt(prompt('Con ciclo for: Inserisci un numero casuale per 5 volte'));
    somma += number;
}

console.log(somma);

/* ---------------------------------------------------------------------------------- */


// Senza Array con while
var somma = 0;
var number;
var i = 0;
while (i < 5){
    number = parseInt(prompt('Con ciclo for: Inserisci un numero casuale per 5 volte'));
    somma += number;
    i++;
}

console.log(somma);