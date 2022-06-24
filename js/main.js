/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, 
e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.


Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il 
numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


BONUS solo se avete completato la consegna principale con successo:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: 

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */
const bombs = 16;
let isGameOver = false;
//let squares = [];

document.getElementById("play-button").addEventListener("click", function () {
  createNewGame();
});

function createNewGame() {
  console.log("clicked");
  const gridContainer = document.getElementById("grid-container");
  // remove content
  gridContainer.innerHTML = "";

  // populate arrays
  const bombsArray = Array(bombs).fill("bombs");
  const emptyArray = Array(100 - bombs).fill("valid");
  // merge arrays
  const gameArray = emptyArray.concat(bombsArray);
  // create random
  const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 100; i++) {
    const newBox = document.createElement("div");
    newBox.setAttribute("id", i);
    newBox.classList.add("square", shuffledArray[i]);

    newBox.addEventListener("click", function () {
      // contains return true is the token is present
      if (isGameOver) return;

      if (newBox.classList.contains("bombs")) {
        newBox.classList.add("bomb");
        gameOver();
        //return;
      } else {
        //newBox.classList.toggle("color");
        newBox.classList.add("checked");
        console.log(i + 1);
      }
    });

    // insert the element on innerHTML of newBox (i + 1);
    newBox.innerHTML = i + 0;
    //squares.push("checked");
    gridContainer.append(newBox);
  }
}

// game over
function gameOver() {
  isGameOver = true;
  alert("You loose!");
  console.log("Game over! Try again!");
}

/* function userWin() {
  isGameOver = true;
  alert("You Win!");
  console.log("Try again!");
} */
