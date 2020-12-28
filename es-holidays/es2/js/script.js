/* 2. Realizziamo il gioco della morra cinese in JavaScript.
Vince chi totalizza per primo 4 punti. */

// Il Computer sceglie in modo casuale [sasso, carta, forbice];
// Uscirà un numero random tra 0,1,2 che verrà associato ad una scelta
var cpuChoice;
var userChoice;
var scoreCpu = 0;
var scoreUser = 0;

while (scoreCpu < 4 && scoreUser < 4) {

    cpuChoice = randomNumber(0,3);

    if (cpuChoice == 0) {
        cpuChoice = 'sasso';
    } else if (cpuChoice == 1) {
        cpuChoice = 'carta';
    } else if (cpuChoice == 2) {
        cpuChoice = 'forbice';
    }

    console.log(cpuChoice);

    userChoice = prompt('Scegli tra "sasso", "carta", "forbice.').toLowerCase().trim();
    console.log(userChoice);
    if (userChoice != 'sasso' || userChoice != 'carta' || userChoice != 'forbice') {
        alert('Qualcosa è andato storto\nDevi fare la scelta corretta')
    } else if (cpuChoice == 'sasso' && userChoice == 'carta') {
        scoreUser++;
        alert('Hai vinto! Un punto per te!\nLa tua scelta è stata: ' + userChoice.toUpperCase() + '\n' + 'Il computer ha scelto: ' + cpuChoice.toUpperCase());
    } else if (cpuChoice == 'carta' && userChoice == 'forbice') {
        scoreUser++;
        alert('Hai vinto! Un punto per te!\nLa tua scelta è stata: ' + userChoice.toUpperCase() + '\n' + 'Il computer ha scelto: ' + cpuChoice.toUpperCase());
    } else if (cpuChoice == 'forbice' && userChoice == 'sasso') {
        scoreUser++;
        alert('Hai vinto! Un punto per te!\nLa tua scelta è stata: ' + userChoice.toUpperCase() + '\n' + 'Il computer ha scelto: ' + cpuChoice.toUpperCase());
    } else if (cpuChoice == userChoice) {
        alert('Pareggio, ritenta!\nLa tua scelta è stata: ' + userChoice.toUpperCase() + '\n' + 'Il computer ha scelto: ' + cpuChoice.toUpperCase());
    } else {
        scoreCpu++;
        alert('Hai perso questo round!\nLa tua scelta è stata: ' + userChoice.toUpperCase() + '\n' + 'Il computer ha scelto: ' + cpuChoice.toUpperCase());
    }
    
    alert('Il Punteggio è:\nComputer: ' + scoreCpu + '\n' + 'Giocatore: ' + scoreUser);
}

if (scoreUser == 4) {
    alert('Complimenti Hai VINTO!');
} else if (scoreCpu == 4) {
    alert('Purtroppo Hai PERSO!');
}

// Funzioni
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min)) +min;
}