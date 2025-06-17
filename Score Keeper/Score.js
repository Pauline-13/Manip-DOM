let scores = document.getElementById ('scores');
let playerOne = document.getElementById ('player_one');
let playerTwo = document.getElementById ('player_two');
let reset = document.getElementById ('reset');
let input = document.getElementById ('container_nombre');

let inputScore = document.getElementById ('input_score_max');
let valider = document.getElementById ('btn_score_max');
let messageScore = document.getElementById ('message_score_max');

let scoreMax = 0;
let score1 = 0;
let score2 = 0;


scores.textContent = "Joueur 1 : " + score1 + " - Joueur 2 : " + score2;

playerOne.addEventListener ("click", function() {
    if (scoreMax === 0 || score1 >= scoreMax || score2 >= scoreMax) return;
    score1++
    updateScores();
    checkWinner();
}); 

playerTwo.addEventListener ("click", function() {
    if (scoreMax === 0 || score1 >= scoreMax || score2 >= scoreMax) return;
    score2++
    updateScores();
    checkWinner();
}); 

valider.addEventListener("click", function() {
    let valeur = Number(inputScore.value);
    if (!isNaN(valeur) && valeur > 0) {
        scoreMax = valeur;
        score1 = 0;
        score2 = 0;
        updateScores();
        messageScore.textContent = `Score max fixé à : ${scoreMax}`;
    } else {
        messageScore.textContent = "Veuillez entrer un nombre valide.";
    }
});

function updateScores () {
    scores.textContent = `Joueur 1 : ${score1} - Joueur 2 : ${score2}`;
}

function checkWinner() {
    if (score1 === scoreMax) {
        scores.textContent = "Joueur 1 a gagné ! 🎉";
    } else if (score2 === scoreMax) {
        scores.textContent = "Joueur 2 a gagné ! 🎉";
    }
}

reset.addEventListener("click", function () {
    // Réinitialise les scores
    score1 = 0;
    score2 = 0;

    // Réinitialise l'affichage des scores
    updateScores();

    // Réinitialise le score max
    scoreMax = 0;

    // Vide les champs input
    inputScore.value = "";
    input.value = "";

    // Efface le message sous le bouton "Valider"
    messageScoreMax.textContent = "";
});

