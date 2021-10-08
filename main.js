let str_pw = 1

let user_name = prompt('inserisci il tuo nome:')

const last_name = prompt("inserisci il tuo cognome:")

const color_name = prompt("inserisci il tuo colore preferito:")


const val_pw = user_name + last_name + color_name + "21";

if (str_pw != 1) alert("La tua password non è sicura");

alert("La tua password è " + val_pw);
