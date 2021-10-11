let ctrl_rs = true

while (ctrl_rs == true) {
    let sc_pw = 1


    let user_name = prompt("inserisci il tuo nome:");
    if (user_name == "" | isNaN(user_name) == false) {
        sc_pw = 0;
    }


    let last_name = prompt("inserisci il tuo cognome:");
    if (last_name == "" | isNaN(last_name) == false) {
        sc_pw = 0;
    }


    let color_name = prompt("inserisci il tuo colore preferito:");
    if (color_name == "" | isNaN(color_name) == false) {
        sc_pw = 0;
    }

    const val_pw = user_name + last_name + color_name + "21";

    if (sc_pw !== 1) {
        window.alert("la tua password non rispetta i criteri di sicurezza");

        if (confirm('Vuoi reinserire la password rispettando i criteri fondamentali?')) {

        }
        else {
            ctrl_rs = false;
        }

    }

    else {
        ctrl_rs = false;
        document.getElementById("password_generator").innerHTML = val_pw;
    }

}
