// Základní proměnné
let totalScore, roundScore, activePlayer, dice;
/* 
totalScore = [0,0];     // pole 0, 1
roundScore = 0;
activePlayer = 0;   // 0 = první hráč, 1 = druhý hráč
 */
/* 
// vynulování a odstranění kostky
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;
 */
/* 
document.querySelector(".diceImage").style.display = "none";
 */

newStart();

// Nová hra - reset hry
function newStart(){
    totalScore = [0,0];     // pole 0, 1
    roundScore = 0;
    activePlayer = 0;   // 0 = první hráč, 1 = druhý hráč

    // vynulování a odstranění kostky
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    // skrytí kostky
    document.querySelector(".diceImage").style.display = "none";

    // Texty do původního stavu
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    // Vrátíme zvýraznění aktivního hráče k prvnímu a u druhého odstraníme
    document.querySelector(".totalScore0").classList.add("active"); 
    document.querySelector(".totalScore1").classList.remove("active"); 
}







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
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();   // bude hrát další hráč
    }
});

// Přepínáme na dalšího hráče
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

// Tlačítko podržet skóre
document.querySelector(".holdScore").addEventListener("click", function(){
    // celkové skóre se vyplní současným skóre
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

    // 
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >= 20){
        document.querySelector("#name-" + activePlayer).textContent = "Vítěz! Vítěz";
        document.querySelector(".diceImage").style.display = "none";
    } else {
        nextPlayer();
    }
})

document.querySelector(".newGame").addEventListener("click", newStart);





