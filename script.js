// Základní proměnné
let totalScore, roundScore, activePlayer, dice;

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;


// vynulování a odstranění kostky
document.getElementById("totalScorePlaeyer-0").textContent = 0;
document.getElementById("totalScorePlaeyer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector(".diceImage").style.display = "none";

document.querySelector(".rollDice").addEventListener("click", function() {
    // 1. generujeme náhodné číslo mezi 1 a 6
    let dice = Math.ceil(Math.random()*6);

    // 2. Zobrazit správný obrázek
    let diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";

    console.log(diceElement.src = "img/" + dice + ".jpg");
});


