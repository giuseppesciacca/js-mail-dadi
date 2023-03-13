/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */


//creiamo una lista di email aventi i permessi per accedere.
const emailList = ['carmelo@gmail.com', 'michele@gmail.com', 'lorenzo@gmail.com', 'fabio@gmail.com', 'donato@gmail.com', 'giuliano@gmail.com'];

//chiediamo all'utente la sua email
const emailInp = document.getElementById('email');
console.log(emailInp.value);
emailInp.focus();

//al click
const submit = document.getElementById('submit');
const empty = document.getElementById('empty');
const resultEl = document.getElementById('result');

submit.addEventListener('click', function () {
    console.log(emailInp.value);

    //ciclo for e Se presente nella lista messaggio di ok, altrimenti messaggio di errore
    let inList = false;

    for (let i = 0; i < emailList.length; i++) {
        const element = emailList[i];

        if (emailInp.value == element) {
            inList = true;
        };
    };

    if (inList == true) {
        console.log('hai i permessi');
        resultEl.innerHTML = 'You have permission';
        resultEl.style.color = 'rgb(25, 135, 84)';
        emailInp.value = '';
    } else {
        console.log('non hai i permessi');
        resultEl.innerHTML = 'You don\'t have permission';
        resultEl.style.color = 'rgb(220, 53, 69)';
        emailInp.value = '';
    };
});

empty.addEventListener('click', function () {
    resultEl.innerHTML = '';
})

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

const nums = ['1', '2', '3', '4', '5', '6'];
const resultBot = document.getElementById('result_bot');
const resultUser = document.getElementById('result_user');
const diceVerdict = document.getElementById('verdict');
const launch = document.getElementById('launch');

launch.addEventListener('click', function (e) {
    e.preventDefault();

    const numBot = nums[Math.floor(Math.random() * nums.length)];
    console.log(numBot);

    const numUser = nums[Math.floor(Math.random() * nums.length)];
    console.log(numUser);

    resultBot.innerHTML = numBot;
    resultUser.innerHTML = numUser;

    if (numBot > numUser) {
        console.log('Hai perso!');
        diceVerdict.innerHTML = '<i class="fa-solid fa-thumbs-down"></i> You lose!';
    } else if (numBot == numUser) {
        console.log('Stesso numero');
        diceVerdict.innerHTML = '<i class="fa-solid fa-handshake-simple"></i> Same number';
    } else {
        console.log('Hai vinto!');
        diceVerdict.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> You won!';
    };
});