/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */


//creiamo una lista di email aventi i permessi per accedere.
const emailList = ['carmelo@gmail.com', 'michele@gmail.com', 'lorenzo@gmail.com', 'fabio@gmail.com', 'donato@gmail.com', 'giuliano@gmail.com'];

//chiediamo all'utente la sua email
const emailUser = prompt('Inserisci la tua email qui:')

//se presente nella lista tutto ok, altrimenti messaggio di errore
for (let i = 0; i < emailList.length; i++) {
    const element = emailList[i];

    if (emailUser == element) {
        console.log('hai i permessi');
    } else if (emailUser != element) {
        console.log('non hai i permessi');
    };

}