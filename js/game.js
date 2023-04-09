class Game{
    constructor(nbPlayers, player1, player2){
        this.nbPlayers = nbPlayers;
        this.gameOver = false;
        this.player1 = player1;
        this.player2 = player2;     
    }

    generateGrid () {
        let tab = [];
        let grid = document.createElement('div');
        for (i = 0; i < grid.length; i++) {
          tab.push(grille[i]);
          console.log(tab);
          return tab;
      }


    }}
  