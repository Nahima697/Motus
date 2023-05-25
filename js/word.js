"use strict";

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

// class Word {
//   constructor(word, nbLetters, language) {
//     this.word = word;
//     this.nbLetters = game.nbLetters;
//     this.letters = this.word.split('');
//     this.language = language;
//   }

//   static getWordsList() {
//     const animals = new Word("ANIMALS", 7, "English");
//     const animaux = new Word("ANIMAUX", 7, "Français");
//     const jaccuzi = new Word("JACUZZI", 7, "Français");
//     const hockeys = new Word("HOCKEYS", 7, "Français");
//     const cryptez = new Word("CRYPTEZ", 7, "Français");
//     const chien = new Word("CHIEN", 5, "Français");
//     const chat = new Word("CHAT", 4, "Français");
//     const pomme = new Word("POMME", 5, "Français");
//     const apple = new Word("APPLE", 5, "English");
//     const banana = new Word("BANANA", 6, "English");

//     return [animals, animaux, jaccuzi, hockeys, cryptez, chien, chat, pomme, apple, banana];
//   }
  
