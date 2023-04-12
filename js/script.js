"use strict";
window.addEventListener('load', (e) => {
  
  fetch("https://trouve-mot.fr/api/sizemin/6/2")
  .then((response) => {
    
    return response.json();
  })
  .then((words) => {
    console.log(words);
    window.localStorage.setItem("words", JSON.stringify(words))
  })
  .catch(err => console.error(err));

  // Afficher le nombre de lettres dans le span
  document.querySelector('#nbLettres').textContent = this.word.letters.length;
    

// EVENT LISTENER DU BOUTON VALIDER

    
  document.querySelector('.btnValider').addEventListener('click', (e) => { 
    const word = JSON.parse(localStorage.getItem("words"));
    const objetName = word[0].name.toUpperCase();
    console.log(objetName);
    
  let letter = objetName.split('');
  console.log(letter);
  // let word_guess = document.querySelector('#guess').value.toUpperCase();
  // console.log(word_guess)
  // let tab = [];
  // let letters_guess = word_guess.split('');
  // let grille = document.querySelectorAll('.grid.one .case'); 
  //   for (i = 0; i < grille.length; i++) {
  //     tab.push(grille[i]);
  //   }

  //   for (let i = 0; i < letters_guess.length; i++) { 
  //     let found = false;
  //     let jaune = false;
  //     let rouge = false;
  //       for (let j = 0; j < letter.length; j++) {
  //         if (letters_guess[i] === letter[j]) {
  //           found = true;
  //           if (i === j) {
  //             tab[i].innerText = letters_guess[i];
  //             tab[i].classList.add('letter');
  //             tab[i].classList.add('red');
  //             rouge = true;
  //             console.log(rouge);
  //             console.log(jaune);
  //           } else {
  //             tab[i].innerText = letters_guess[i];
  //             tab[i].classList.add('letter');
  //             tab[i].classList.add('jaune');
  //             jaune = true;
  //             console.log(rouge);
  //             console.log(jaune);
  //           }
  //         }
  //       }
  //       if (found !== true) {
  //         tab[i].innerText = letters_guess[i];
  //         tab[i].classList.add('letter');
  //         console.log(tab[i]);
  //         console.log(rouge);
  //         console.log(jaune);

  //       } else if (rouge && jaune) {
  //         tab[i].classList.remove('jaune');
  //         tab[i].classList.add('red');
  //         console.log(tab[i]);
  //         console.log(rouge);
  //         console.log(jaune);
  //       }
  //     }
    } 
  
  )})