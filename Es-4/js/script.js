/* L’utente inserisce due numeri in successione,
con due prompt. Il software stampa il maggiore */

var firstNumber = parseInt(prompt('Inserisci un primo numero'));
var secondNumber = parseInt(prompt('Inserisci un secondo numero'));


if (firstNumber > secondNumber){
    document.getElementById('number').innerHTML = 'Il numero più grande è il primo: ' + firstNumber;
} else if (secondNumber > firstNumber){
    document.getElementById('number').innerHTML = 'Il numero più grande è il secondo: ' + secondNumber;
} else {
    document.getElementById('number').innerHTML = 'I numeri sono uguali';
}