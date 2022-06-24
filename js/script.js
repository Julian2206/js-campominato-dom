/* L'utente clicca su un bottone che genererà 
una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto 
un messaggio in console con il numero della cella cliccata. */

/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato 
su una cella che non era una bomba.
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

const grid = document.querySelector("#grid-container");

const button = document.getElementById("button");

const width = 100;

// create 10*10 box by click
button.addEventListener("click", function () {
  for (let i = 0; i < width; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      //newBox.classList.add/remove("color") with "toggle";
      console.log(i + 1);
    });
    // insert the element on innerHTML of newBox (i + 1);
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});

function createNewBox() {
  const box = document.createElement("div");
  box.classList.add("square");

  return box;
}

//----------------------------------------------------------

const medium = document.getElementById("medium");

medium.addEventListener("click", function () {
  for (let i = 0; i < 80; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      console.log(i + 1);
    });
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});

const hard = document.getElementById("hard");

hard.addEventListener("click", function () {
  for (let i = 0; i < 60; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      console.log(i + 1);
    });
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});
