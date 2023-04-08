"user strict";
window.addEventListener('load', (e) => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '11c7bfa248msh9a945279bd03d3dp19fdd3jsn04d3504c4322',
  //     'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&wordLength=7', options)
  //   .then(response => response.json())
  //   .then(response => window.localStorage.setItem("words",JSON.stringify(response)))
  //   .catch(err => console.error(err));


    // CREER UN TABLEAU DES CASES

    // function getTab () {
      
    //   }
    //   console.log (tab);
      
    // }

 

  // EVENT LISTENER DU BOUTON VALIDER

    
    document.querySelector('.btnValider').addEventListener('click', (e) => {
    // let words = JSON.parse(localStorage.getItem("words"));
    // let word = words[0];
    function showCase (grid) {
      let word = ('animals').toUpperCase();
      let letter = word.split('');
      console.log(letter);
      let word_guess = document.querySelector('#guess').value.toUpperCase();
      console.log(word_guess)
      let tab = [];
      let grille = document.querySelectorAll('.grid.one .case'); 
      for (i = 0; i < grille.length; i++) {
        tab.push(grille[i]);
      }
    }

    function compareLetters(letter, letters_guess) {
      let letters_guess = word_guess.split('');
      const usedIndices = [];
      for (let i = 0; i < letters_guess.length; i++) { 
        let found = false;
          let jaune = false;
          let rouge = false;
          for (let j = 0; j < letter.length; j++) {
            if (letters_guess[i] === letter[j]) {
              found = true;
              if (i === j) {
                tab[i].innerText = letters_guess[i];
                tab[i].classList.add('letter');
                tab[i].classList.add('red');
                rouge = true;
                console.log(rouge);
                console.log(jaune);
              } else {
                tab[i].innerText = letters_guess[i];
                tab[i].classList.add('letter');
                tab[i].classList.add('jaune');
                jaune = true;
                console.log(rouge);
                console.log(jaune);
              }
            }
          }
          if (found !== true) {
            tab[i].innerText = letters_guess[i];
            tab[i].classList.add('letter');
            console.log(tab[i]);
            console.log(rouge);
            console.log(jaune);
  
          } else if (rouge && jaune) {
            tab[i].classList.remove('jaune');
            tab[i].classList.add('red');
            console.log(tab[i]);
            console.log(rouge);
            console.log(jaune);
          }
        }
      }
  
    }
    
    
    
    
    
    // for(let i = 0; i < letter.length; i++) {
    //   if(letter[i] === letters_guess[i]) {
    //     tab[i].innerText = letters_guess[i];
    //     tab[i].classList.add('letter');
    //     tab[i].classList.add('red');
    //   } else {
    //     let found = false;
    //     for(let j = 0; i < letters_guess.length; j++) {
    //       if(letter[i] === letters_guess[j] && i !== j) {
    //         tab[i].innerText = letters_guess[i];
    //         tab[i].classList.add('letter');
    //         tab[i].classList.add('jaune');
    //         console.log(tab[i]);      
    //         found = true;
    //         break;
    //       }
    //     }
    //     if(!found) {
    //       tab[i].innerText = letters_guess[i];
    //       tab[i].classList.add('letter');
    //       console.log(tab[i]);
    //     }
    //   }
    // }

    )})
