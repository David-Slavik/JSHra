// Základní proměnné
let totalScore, roundScore, activePlayer, dice;

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;   // 0 = první hráč, 1 = druhý hráč


// vynulování a odstranění kostky
document.getElementById("totalScorePlaeyer-0").textContent = 0;
document.getElementById("totalScorePlaeyer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector(".diceImage").style.display = "none";

// měníme obrázek kostky podle náhodného čísla
document.querySelector(".rollDice").addEventListener("click", function() {
    // 1. generujeme náhodné číslo mezi 1 a 6
    let dice = Math.ceil(Math.random()*6);

    // 2. Zobrazit správný obrázek
    let diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "img/" + dice + ".jpg");

    // 3. Nasčítáme čísla z kostky
    if (dice !== 1){
        roundScore = roundScore + dice;
        document.getElementById("currentScore-0").textContent = roundScore;
    } else {
        nextPlayer();   // bude hrát další hráč
    }
});


function nextPlayer(){
    if(activePlayer === 0){     // Když je activePlayer roven 0, hraje hráč číslo 1. Když není roven 0, tak hraje hráč číslo 2.
        activePlayer = 1;       // tak ho přepni na hráče číslo 2
    } else {                    // pokud hraje hráč číslo 2
        activePlayer = 0;       // tak ho přepni na hráče číslo 1
    }

    roundScore = 0; 

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");      // toggle = pokud totalscore0 má active, tak to přepni na remove(remove), pokud ho nemá, tak ho přidej (add)
    document.querySelector(".totalScore1").classList.toggle("active");      // toggle = pokud totalscore0 má active, tak to přepni na remove(remove), pokud ho nemá, tak ho přidej (add)
}









