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
    constructor() {
      this.word = null;
      this.nbLetters = this.nbLetters;
      this.letters = []; // tableau pour sauvegarder les lettres de chaque cellule
    }
  
    generateGrid() {
      let gridElement = document.createElement("div");
      gridElement.classList.add("grid");
      
      for (let i = 0; i < this.nbLetters; i++) {
        let caseElement = document.createElement("div");
        caseElement.classList.add("case");
        caseElement.innerText = letters_guess[i];
        gridElement.appendChild(caseElement);
      };
      
      return gridElement;
    };

    compareLetters() {
      for (let i = 0; i < this.nbLetters; i++) {
        let found = false;
        let jaune = false;
        let rouge = false;
        for (let j = 0; j < this.nbLetters; j++) {
          if (letters_guess === this.letters[j]) {
            found = true;
            if (i === j) {
              letters_guess[j].classList.add("red");
              rouge = true;
            } else {
              letters_guess[j].classList.add("jaune");
              jaune = true;
            }
          }
        }
        if (found !== true) {
          
        } else if (rouge && jaune) {
          letters_guess[i].classList.remove("jaune");
          letters_guess[i].classList.add("red");
        }
      }
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
  
      // Ajouter un event listener sur le bouton "valider"
      const btnValider = document.querySelector(".btnValider");
      btnValider.addEventListener("click", () => {
      const word_guess = document.querySelector("#guess").value.toUpperCase();
      const letters_guess = word_guess.split('');
        this.compareLetters();
      });
    }
  
 
  }
  
let game = new Game();
game.start();



})