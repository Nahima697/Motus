"use strict";
window.addEventListener('DOMContentLoaded', (event) => {

class Word {
  constructor(word, nbLetters, language) {
    this.word = word;
    this.nbLetters = nbLetters;
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
    constructor(nbLetters, nbEssaie) {
      this.nbLetters = nbLetters;
      this.nbEssaie = 7;
   
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
        const btnValider = document.querySelector(".btnValider");
        btnValider.addEventListener("click", () => {
        const word_guess = document.querySelector("#guess").value.toUpperCase();
        const letters_guess = word_guess.split('');
        console.log(letters_guess);
        console.log(this.word.letters)
        for (let i = 0; i < letters_guess.length; i++) {
        let found = false;
        let jaune = false;
        let rouge = false;
        for (let j = 0; j < this.word.letters.length; j++) {
            if (this.word.letters[j] === letters_guess[i]) {
            found = true;
            if (i === j) {
                document.querySelectorAll('.case')[i].innerText = letters_guess[i];
                document.querySelectorAll('.case')[i].classList.add("letter");
                document.querySelectorAll('.case')[i].classList.add("red");
                rouge = true;
            } else {
                document.querySelectorAll('.case')[i].innerText = letters_guess[i];
                document.querySelectorAll('.case')[i].classList.add("letter");
                document.querySelectorAll('.case')[i].classList.add("jaune");
                jaune = true;
            }
            }
        }
        if (found !== true) {
            document.querySelectorAll('.case')[i].innerText = letters_guess[i];
            console.log(document.querySelectorAll('.case')) 
            document.querySelectorAll('.case')[i].classList.add("letter");
        } else if (rouge && jaune) {
            document.querySelectorAll('.case')[i].innerText = letters_guess[i];
            document.querySelectorAll('.case')[i].classList.add("letter");
            document.querySelectorAll('.case')[i].classList.remove("jaune");
            document.querySelectorAll('.case')[i].classList.add("red");
        }
        }
    });
    }


      start() {
        
        // Générer la grille
        const wordsList = Word.getWordsList();
        console.log(wordsList);
        const randomIndex = Math.floor(Math.random() * wordsList.length);
        this.word = wordsList[randomIndex];
        this.nbLetters = this.word.nbLetters;
        const grid = this.generateGrid();
      
        // Ajouter la grille à la page
        document.body.appendChild(grid);
      
        // Ajouter un écouteur d'événement à l'élément d'entrée pour mettre à jour this.letters_guess
        console.log(this.letters_guess);
        
        // Appeler la méthode compareLetters
        this.compareLetters();
      }
      
      
  
 
  }
  
let game = new Game();
game.start();



})