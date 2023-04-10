"use strict";

window.addEventListener('load', () => {
  
    class Game {
        constructor() {
          this.grid = null;
          this.word = null;
          this.nbLetters = null; 
          this.letters = []; // tableau pour sauvegarder les lettres de chaque cellule
        }
      
        generateGrid() {
          let gridElement = document.createElement("div");
          gridElement.classList.add("grid");
          gridElement.style.setProperty("--nbletters", this.nbLetters); 
          for (let i = 0; i < this.nbLetters; i++) { 
            let caseElement = document.createElement("div");
            caseElement.classList.add("case");
            // sauvegarder la lettre dans le tableau
            this.letters.push(this.word.letters[i]);
            gridElement.appendChild(caseElement);
          }
          return gridElement;
        }
      
        start() {
          // Générer la grille
          const wordsList = Word.getWordsList();
          const randomIndex = Math.floor(Math.random() * wordsList.length);
          this.word = wordsList[randomIndex];
          this.nbLetters = this.word.nbLetters; 
          this.grid = this.generateGrid();
          // Ajouter la grille à la page
          document.body.appendChild(this.grid);
      
          // Ajouter un event listener sur le bouton "valider"
          const btnValider = document.querySelector('.btnValider');
          btnValider.addEventListener('click', () => {
            const word_guess = document.querySelector('#guess').value.toUpperCase();
            this.compareLetters(word_guess);
          });
        }
      
        compareLetters(guess) {
          let letters_guess = guess.toUpperCase().split('');
          let cells = this.grid.querySelectorAll('.letter');
          for (let i = 0; i < letters_guess.length; i++) {
            let found = false;
            let jaune = false;
            let rouge = false;
            let letter = letters_guess[i];
            for (let j = 0; j < this.nbLetters; j++) {
              if (letter === this.letters[j]) {
                found = true;
                if (i === j) {
                  cells[j].classList.remove('jaune');
                  cells[j].classList.add('red');
                  rouge = true;
                } else {
                  cells[j].classList.remove('red');
                  cells[j].classList.add('jaune');
                  jaune = true;
                }
              }
            }
            if (!found) {
              cells[i].innerText = '-';
            } else if (rouge && jaune) {
              cells[i].classList.remove('jaune');
              cells[i].classList.add('red');
            }
          }
        }
      }
      

  const game = new Game();
  game.start();
});
