/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


var firstWord = prompt('Inserisci una prima parola');
var secondWord = prompt('Inserisci una seconda parola');


if (firstWord.length > secondWord.length){
    document.getElementById('word').innerHTML = 'La parola più lunga è: ' + firstWord;
} else if (secondWord.length > firstWord.length){
    document.getElementById('word').innerHTML = 'La parola più lunga è: ' + secondWord;
} else {
    document.getElementById('word').innerHTML = 'Le parole hanno la stella lunghezza';
}