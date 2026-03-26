'use strict';

//------ Variabili  -------
let player;
let computer;
const playerScore = [];
const computerScore = [];
let numRound = 5;
let totComputer = 0;
let totPlayer = 0;

// ---- Ciclo per salvare i risultati del player ----
for (let i = 0; i < numRound; i++) {
    player = Math.floor(Math.random() * 6) + 1;
    playerScore.push(player);
    totPlayer += playerScore[i];
    console.log(`Round ${i + 1} player: è uscito il numero ${player}`);
}

// ---- Ciclo per salvare i risultati del player ----

for (let i = 0; i < numRound; i++) {
    computer = Math.floor(Math.random() * 6) + 1;
    computerScore.push(computer);
    totComputer += computerScore[i];
    console.log(`Round ${i + 1} computer: è uscito il numero ${computer}`);
}

// ---- Stampo i risultati sommati ----

console.log(`Player: ${totPlayer} Computer: ${totComputer}`);

// ---- Condizioni per il messaggio finale ----
console.log(
    totPlayer > totComputer ? alert(` complimenti hai vinto`) :
        totPlayer < totComputer ? alert(`il computer ti ha battuto`) :
            totPlayer === totComputer ? alert(`Ritenta, avete pareggiato`) : alert(`Qualcosa è andato storto`)
);



