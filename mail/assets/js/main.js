/* 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

// variabili
const emailUser = prompt("Inserire email");
let emailTrovata = false;

// array
const email = [
	"stefano.necci@gmail.com",
	"marco.rossi@gmail.com",
	"valentino.proietti@gmail.com",
	"chiara.recubini@gmail.com",
	"luca.liguori@gmail.com",
];

// ciclo for con condizionale if
for (let i = 0; i < email.length; i++) {
	if (emailUser == email[i]) {
		emailTrovata = true;
	} else if (emailUser != email[i]) {
	}
}
console.log(emailTrovata);
