/* 1. Realizziamo il classico gioco indovina numero in JavaScript
Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
Bonus: provate 3 livelli di complessità */


var nCpu = gRandom(1,100);
console.log(nCpu);
var tentativi = 4;
var nUser;
for (var i = 0; i < 4; i++) {
    
    nUser = parseInt(prompt('Inserisci un numero tra 1 e 100 compresi'));

    if (nUser >= 1 && nUser <= 100) {
        if (nUser == nCpu) {
            alert('Hai vinto');
        } else if (nUser < nCpu) {
            alert('Il numero è basso');
        } else if (nUser > nCpu) {
            alert('Il numero è alto');
        } else if (nUser > 100 && nUSer < 1) {
            alert('Solo numero tra uno e 100 compresi');
        }
        alert('Hai ancora: ' + (tentativi - (i + 1)) + ' tentativi');
    } else {
        alert('Solo numeri tra 1 e 100');
        i--;
    }
}

// Funzioni
function gRandom (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}