"use strict";
window.addEventListener('DOMContentLoaded', (event) => {
  class Word {
    static async getWordsList() {
      const response = await fetch("https://trouve-mot.fr/api/sizemin/6/2");
      const words = await response.json();
      return words.map(word => new Word(word.name));
    }
  
    constructor(word) {
      this.word= word.toUpperCase();
      this.nbLetters = word.length;
      this.letters = this.word.split("");
    }
  }
  

class Game {
    constructor(nbLetters, nbTries) {
      this.nbLetters = nbLetters;
      this.nbTries = 10;
      this.gameOver = false; 
    }

    generateGrid() {
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
    
        // création des lignes de la grille
        for (let i = 0; i < this.nbTries; i++) {
          let rowElement = document.createElement("div");
          rowElement.classList.add("row");
          
     
          // création des cases de chaque ligne
          for (let j = 0; j < this.word.letters.length; j++) { 
            let caseElement = document.createElement("div");
            caseElement.classList.add("case");
            rowElement.appendChild(caseElement);
                // Ajouter la classe 'first-case' à la première case
          if (j === 0) {
            caseElement.classList.add('first-case');
            caseElement.classList.add('letter');
          }
          
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
                     rows[currentRow].querySelectorAll('.case')[i].classList.add("wellplaced");
                    rouge = true;
                } else {
                  if( rouge !== true) {
                    rows[currentRow].querySelectorAll('.case')[i].innerText = letters_guess[i];
                    rows[currentRow].querySelectorAll('.case')[i].classList.add("letter");
                    rows[currentRow].querySelectorAll('.case')[i].classList.add("misplaced");
                   jaune = true;
                  }                   
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
                 rows[currentRow].querySelectorAll('.case')[i].classList.remove("misplaced");
                 rows[currentRow].querySelectorAll('.case')[i].classList.add("wellplaced");
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
            console.log(currentRow);      
    });
    
    }

    async start() {
      const wordsList = await Word.getWordsList();
      console.log(wordsList);
      const randomIndex = Math.floor(Math.random() * wordsList.length);
      this.word = wordsList[randomIndex];
      console.log(this.word);
      this.nbLetters = this.word.nbLetters;

      // Générer la grille
      const grid = this.generateGrid();

      // Ajouter la grille à la page
      document.body.appendChild(grid);

      // Afficher la première lettre du mot
      const firstLetter = this.word.letters[0];
      const firstCase = document.querySelector('.first-case');
      firstCase.innerText = firstLetter;

      // Modifier le span en fonction du nombre de lettres
      document.querySelector('#nbLettres').textContent = this.word.letters.length;

      // Afficher le nombre d'essais restants
      const nbTriesElement = document.querySelector(".nbTries");
      nbTriesElement.innerText = `Nombre d'essais restants : ${this.nbTries}`;

      // Appeler la méthode compareLetters
      this.compareLetters();
      // Appeler la méthode restart
      this.restart();
  
    }
    
      restart() {
        game.gameOver = false;
        game.nbTries = 10;
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