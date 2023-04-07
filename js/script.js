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
    let word = ('Enjoyed').toUpperCase();
    let letter = word.split('');
    console.log(letter);
    let word_guess = document.querySelector('#guess').value.toUpperCase();
    console.log(word_guess)
    let tab = [];
    let grille = document.querySelectorAll('.grid.one .case'); 
    for (i = 0; i < grille.length; i++) {
      tab.push(grille[i]);
    }
    
    let letters_guess = word_guess.split('');
    console.log(letters_guess);
    for (let i =0; i < letters_guess.length; i++) {
      if (letter[i] == letters_guess[i]) {
   
        console.log(tab[i])
        tab[i].innerText =letter[i];
          
      }
      
    }


  })



});

