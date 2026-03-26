'use script';

//------ Variabili  -------
let player;
let computer;
const playerScore = [];
const computerScore = [];
let numRound = 5;
let totComputer = 0;
let totPlayer = 0;

// ---- Ciclo per salvare i risultati del player ----
for (let i = 0; i <= numRound; i++) {
    player = Math.floor(Math.random() * 6) + 1;
    playerScore.push(player);
    totPlayer += playerScore[i];
}

// ---- Ciclo per salvare i risultati del player ----

for (let i = 0; i <= numRound; i++) {
    computer = Math.floor(Math.random() * 6) + 1;
    computerScore.push(computer);
    totComputer += computerScore[i];
}

// ---- Stampo i risultati sommati ----

console.log(`Player: ${totPlayer} Computer: ${totComputer}`)

// ---- Condizioni per il messaggio finale ----
console.log(
    totPlayer > totComputer ? ` complimenti hai vinto` :
        totPlayer < totComputer ? `il computer ti ha battuto` :
            totPlayer === totComputer ? `Ritenta, avete pareggiato` : `Qualcosa è andato storto`
);



