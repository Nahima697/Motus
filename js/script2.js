"use strict";
window.addEventListener('DOMContentLoaded', (event) => {

class Word {
  constructor(word, nbLetters, language) {
    this.word = word;
    this.nbLetters = game.nbLetters;
    this.letters = this.word.split('');
    this.language = language;
  }

  static getWordsList() {
    const animals = new Word("ANIMALS", 7, "English");
    const animaux = new Word("ANIMAUX", 7, "Français");
    const jaccuzi = new Word("JACUZZI", 7, "Français");
    const hockeys = new Word("HOCKEYS", 7, "Français");
    const cryptez = new Word("CRYPTEZ", 7, "Français");
    const chien = new Word("CHIEN", 5, "Français");
    const chat = new Word("CHAT", 4, "Français");
    const pomme = new Word("POMME", 5, "Français");
    const apple = new Word("APPLE", 5, "English");
    const banana = new Word("BANANA", 6, "English");

    return [animals, animaux, jaccuzi, hockeys, cryptez, chien, chat, pomme, apple, banana];
  }
  
}

class Game {
    constructor(nbLetters, nbTries) {
      this.nbLetters = nbLetters;
      this.nbTries = 7;
      this.gameOver = false; 
    }

    generateGrid() {
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
    
        // création des lignes de la grille
        for (let i = 0; i < 7; i++) {
          let rowElement = document.createElement("div");
          rowElement.classList.add("row");
          
          // création des cases de chaque ligne
          for (let j = 0; j < this.nbLetters; j++) { 
            let caseElement = document.createElement("div");
            caseElement.classList.add("case");
            rowElement.appendChild(caseElement);
          }
    
          gridElement.appendChild(rowElement);
        }
        
        return gridElement;
      }
    compareLetters() {
        const grid = this.generateGrid();
        const rows = document.querySelectorAll('.row');
        let currentRow = 0 
        const btnValider = document.querySelector(".btnValider");
        btnValider.addEventListener("click", () => {
        const word_guess = document.querySelector("#guess").value.toUpperCase();
        const letters_guess = word_guess.split('');
        console.log(letters_guess);
        console.log(this.word.letters);

        // Diminuer le nombre d'essais restants
        this.nbTries--;
        const nbTriesElement = document.querySelector(".nbTries");
        nbTriesElement.innerText = `Nombre d'essais restants : ${this.nbTries}`;
        // boucle qui compare les lettres
            for (let i = 0; i < letters_guess.length; i++) {
            let found = false;
            let jaune = false;
            let rouge = false;
            for (let j = 0; j < this.word.letters.length; j++) {
                if (this.word.letters[j] === letters_guess[i]) {
                found = true;
                if (i === j) {
                     rows[currentRow].querySelectorAll('.case')[i].innerText = letters_guess[i];
                     rows[currentRow].querySelectorAll('.case')[i].classList.add("letter");
                     rows[currentRow].querySelectorAll('.case')[i].classList.add("red");
                    rouge = true;
                } else {
                     rows[currentRow].querySelectorAll('.case')[i].innerText = letters_guess[i];
                     rows[currentRow].querySelectorAll('.case')[i].classList.add("letter");
                     rows[currentRow].querySelectorAll('.case')[i].classList.add("jaune");
                    jaune = true;
                }
                }
            }
            if (found !== true) {
                 rows[currentRow].querySelectorAll('.case')[i].innerText = letters_guess[i];
                console.log( rows[currentRow].querySelectorAll('.case')) 
                 rows[currentRow].querySelectorAll('.case')[i].classList.add("letter");
            } else if (rouge && jaune) {
                 rows[currentRow].querySelectorAll('.case')[i].innerText = letters_guess[i];
                 rows[currentRow].querySelectorAll('.case')[i].classList.add("letter");
                 rows[currentRow].querySelectorAll('.case')[i].classList.remove("jaune");
                 rows[currentRow].querySelectorAll('.case')[i].classList.add("red");
            }
            
            }
            // Vérifier si le joueur a perdu
            if (this.nbTries === 0 && word_guess !== this.word.word) {
            document.querySelector('.grid').style.display="none";
            console.log('perdu');
            document.querySelector('#results').innerHTML="Vous avez perdu!";
            this.gameOver = true;
            return;
            }
            // Vérifier si le joueur a gagné
            if (word_guess === this.word.word) {
            document.querySelector('.grid').style.display="none";
            document.querySelector('#results').textContent="Vous avez gagné!";
            this.gameOver = true;
            return;
        
            }
            currentRow++;      
    });
    
    }

      start() {
        
        // choix du mot aléatoire
        const wordsList = Word.getWordsList();
        console.log(wordsList);
        const randomIndex = Math.floor(Math.random() * wordsList.length);
        this.word = wordsList[randomIndex];
        this.nbLetters = this.word.nbLetters;
        // Générer la grille
        const grid = this.generateGrid();
      
        // Ajouter la grille à la page
        document.body.appendChild(grid);

         // Afficher le nombre d'essais restants
        const nbTriesElement = document.querySelector(".nbTries");
        nbTriesElement.innerText = `Nombre d'essais restants : ${this.nbTries}`;
  
        // Ajouter un eventlistener à l'élément d'entrée pour mettre à jour this.letters_guess
        console.log(this.letters_guess);
        
        // Appeler la méthode compareLetters
        this.compareLetters();
        this.restart();

      }

      restart() {
        game.gameOver = false;
        let btnRestart = document.createElement('button');
        btnRestart.innerText = "Restart";
        btnRestart.classList.add('restart');
        btnRestart.setAttribute("id", "restart-button");
        document.body.appendChild(btnRestart);
        document.querySelector('#restart-button').addEventListener('click', function() {        
        document.querySelector('#results').innerHTML='';
        game.nbTries = 7;
        btnRestart.remove();
        game.start(7,7);
        
          });
      }
      
 
  }
  
let game = new Game(7,7);
game.start();



})