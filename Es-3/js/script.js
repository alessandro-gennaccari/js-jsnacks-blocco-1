/* terzo snack
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

var lista = ["Pippo", "Pluto", "Topolino"];
var nome = prompt('Qual\' è il tuo nome?');
nome = nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();

var accesso = false;

for (var i = 0; i < lista.length; i++) {
    if (nome == lista[i]) {
        accesso = true;
    }
}

if (accesso) {
    alert('Puoi partecipare!')
} else {
    alert('Non puoi partecipare!')
}





