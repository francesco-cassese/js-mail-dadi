'use strict';

//Creo la lista degli invitati 
//Chiedo all'utente di scrivere la propria Email
//Controllo che quella inserita sia effettivamente valida
//Controllo che l'email sia presente nella lista
//SE l'utente è presente stampa Benvenuto nome utente

//-------- CREAZIONE LISTA INVITATI ---------

const invitedUsers = [
    'marco.rossi85@gmail.com',
    'elena.bianchi.92@outlook.it',
    'alessandro_verdi_77@yahoo.it',
    'giulia.ferrari.napoli@libero.it',
    'stefano.romano.work@protonmail.com',
    'francesca_esposito89@tin.it',
    'riccardo.gallo.94@icloud.com',
    'valeria.fontana_2023@fastwebnet.it',
    'matteo.rizzo.dev@virgilio.it',
    'sofia.contini_88@alice.it'];

//-------- CHIEDO L'EMAIL ALL'UTENTE --------

const enteredEmail = prompt('Inserisci qui la tua Email');

let userFound = false; //Creo variabile da usare nel for
let isLetterPresent = false; //Variabile per la validazione 
let hasSpace = false;

//------- CONTROLLI ------------
if (enteredEmail === null) { //SE L'UTENTE ANNULLA FERMO TUTTO
    alert('Operazione annullata');
} else if (enteredEmail === "") {//SE L'UTENTE NON SCRIVE BLOCCO TUTTO 
    alert('Non lasciare questo campo vuoto');
} else if (enteredEmail.length < 5) { //SE LA LUNGHEZZA DELL'EMAIL INSERITA E MINORE DI 5 BLOCCO TUTTO
    alert('Email troppo corta');
} else {
    for (let i = 0; i < enteredEmail.length; i++) { //INIZIO IL CONTROLLO SULLE PAROLE 
        const carattere = enteredEmail[i];
        if (carattere === " ") { //L'EMAIL NON DEVE CONTENERE SPAZIO
            hasSpace = true;
        } else if (carattere === `@`) { //SE TROVA LA @ CAMBIA LO STATO DELLA VARIABILE IN TRUE
            isLetterPresent = true;
        }
    }
    if (isLetterPresent === false) { //SE NON HA TROVATO LA @ BLOCCA PROGRAMMA
        alert(`Email non valida`);

    } else if (hasSpace) { //SE L'EMAIL CONTIENE SPAZI BLOCCA
        alert(`L'Email non può contenere spazi`);

    } else { //ALTRIMENTI CONTINUA

        const emailLower = enteredEmail.toLowerCase() //MI ASSICURO CHE IL DATO PASSATO SIA TUTTO IN PICCOLO
        const emailPart = emailLower.split('@'); //DIVIDO LA STRINGA PER ESTRAPOLARNE SOLO IL NOME
        const nameUser = emailPart[0] //SALVO IL NOME DELL'UTENTE

        //------ CONTROLLO ARRAY PER LA CORRISPONDENZA EMAIL -----------    
        for (let i = 0; i < invitedUsers.length; i++) {
            if (emailLower === invitedUsers[i]) {
                userFound = true;
            }
        }

        console.log(userFound ? `Benvenuto ${nameUser}` : `${nameUser} purtroppo non sei tra gli invitati`)
    }
}


