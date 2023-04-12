# Motus

## Structure
### J'ai commencé le jeu motus en posant la structure c'est à dire le HTML. J'ai décidé de faire un formulaire avec des inputs afin que chaque lettres du mots écrits par le joueur rentre dans un input tout cela dans une structure en grille. J'ai fait ensuite le CSS pour faire une grille qui ressemble à motus. Je me suis rendu compte de la difficulté de réaliser le jeu avec ma première approche. J'ai donc opté dans un second temps par des divs classe grid avec des divs classe case à l'intérieur.

## Début de l'algo
### J'ai commencé par réfléchir comment à partir de l'input renseigné par le joueur remplir les différents cases. J'ai fini par trouver une boucle qui à partir d'un tableau vide prenait chaque lettre renseignée du mot avec la méthode split pour la verser dans le tableau vide avec la méthode push.

### Ensuite j'ai réfléchi aux différentes conditions pour faire apparaitre les classes de la couleur jaune ou rouge(orange) en fonction de la présence des lettres dans le mot. J'ai trouvé un petit algo qui semblait fonctionner. (voir script).

## Les classes
### Etant donné les directives de l'exercice j'ai commencé à penser classe, et j'ai tout de suite pensé à mettre une classe Word et Game en me basant sur les précédents exercices (tableau et morpion). Je me suis inspiré de ces derniers pour commencer à créer mes classes, et je me suis rendu compte de la possibilité de générer la grid à travers ces classes en mettant une méthoe generategrid car les div html présentait pour moi la faiblessed'avoir des classes css pour les différencier ce qui ne me semblait pas pertinant.

### de même pour la classe Word j'ai directement pensé à utiliser une api qui génère des mots aléatoirements et d'utiliser le localstorage pour stocker les mots localement. Je me suis rendu compte ensuite que ce n'était pas a priorité.

## Les méthodes
### Je me suis attelée à créer les méthodes de la classe Game : la générateGrid, et la compareLetter dans un premier temps en me basant sur les méthodes des tableaux pour la grid, et mon algo du début pour le compareLetter, non sans mal. Ensuite, j'ai créée la méthode start pour initialiser le jeu et reprendre les méthodes précédentes.

### J'ai rajouté ensuite la variable nbtries dans la classe game, ainsi que le gamover pour réinitialiser le jeu en fin de partie avec la méthode restart.

 ## l'Api generate Word
 ### pour finir j'ai réussi à intégrer une APi pour générer des mots aléatoires et l'ai intégré dans la classe Word.
 ### De même, je n'ai pas réussi à garantir la fiabilité de l'algo sur les lettres et le settimeout pour afficher les lettres avec un décalage ne marche pas sur la première ligne, mais j'ai fait de mon mieu compte tenu de mon niveau débutant. Vous trouverez surement des lacunes sur la forme et la présentation de mon code, mais c'est mon point faible sur lequel je travail. En conclusion, j'ai voulu mettre les classes game et word à part dans des fichiers distincts mais le jeu est moins fiable du coup je vous laisse avec le script2 pour tester le jeu. Amusez vous bien!
