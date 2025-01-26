### TP : Créer un jeu de Tic-Tac-Toe avec React et Zustand

#### Objectif :
Dans ce TP, vous allez créer un jeu de **Tic-Tac-Toe** (aussi appelé **Morpion**) en utilisant **React** pour l'interface utilisateur et **Zustand** pour gérer l'état du jeu. L'objectif est de pratiquer la gestion d'état avec Zustand et de manipuler le DOM à travers des interactions utilisateur simples.

#### Prérequis :
- Avoir des bases en **React** et **JavaScript**.
- Savoir installer des packages et gérer un projet React.

#### Étapes du TP :

### 1. **Configuration initiale**
   - **Créer un projet React** avec `Vite`.
   - **Installer Zustand** via npm ou yarn. Zustand est une bibliothèque simple pour gérer l'état global dans un projet React.
   - Organisez votre projet avec un fichier principal `App.jsx` où vous gérerez la logique du jeu.

### 2. **Création de l'état du jeu avec Zustand**
   Vous devez utiliser Zustand pour créer et gérer l'état de votre jeu. L'état principal contiendra :
   - Une grille de 3x3 (représentée par un tableau de 9 cases).
   - Le joueur courant (soit "X", soit "O").
   - Un indicateur pour savoir si le jeu est terminé (gagnant ou égalité).
   - Un bouton pour réinitialiser le jeu lorsque celui-ci est terminé.

   **Logique de l'état à implémenter :**
   - Lorsqu'un joueur clique sur une case de la grille, il doit pouvoir y inscrire "X" ou "O".
   - Après chaque mouvement, l'état doit être mis à jour pour refléter le changement de joueur.
   - Si un joueur gagne (lorsque 3 cases consécutives sont remplies par le même symbole), le jeu doit afficher le gagnant.
   - Si toutes les cases sont remplies sans gagnant, le jeu doit afficher un message d'égalité.
   - Un bouton doit permettre de réinitialiser le jeu, en réinitialisant l'état à sa valeur initiale.

### 3. **Affichage de la grille**
   Utilisez une grille de 3x3 pour afficher les cases du jeu. Chaque case doit être un bouton cliquable.
   - Lorsqu'une case est cliquée, l'utilisateur doit voir "X" ou "O" selon le joueur courant.
   - La grille peut être représentée sous forme de boutons dans un tableau ou une grille CSS.

### 4. **Vérification des conditions de victoire**
   Une fois qu'un joueur a effectué un mouvement, il faut vérifier s'il a gagné. Pour cela :
   - Vous devez vérifier les différentes combinaisons possibles pour une victoire : les lignes horizontales, verticales et les deux diagonales.
   - Si un joueur a remporté la partie, affichez un message indiquant le gagnant (par exemple, "Joueur X a gagné !").

### 5. **Réinitialisation du jeu**
   Lorsque le jeu se termine (qu'un joueur a gagné ou qu'il y a égalité), le joueur doit pouvoir réinitialiser la grille et recommencer une nouvelle partie.

   **Ce que vous devez implémenter dans cette partie :**
   - Un bouton qui réinitialise la grille, le joueur courant, et supprime le message de victoire ou d'égalité.
   - Après avoir cliqué sur le bouton, l'état du jeu doit être remis à zéro.

### 6. **Interface utilisateur**
   - **Affichage du joueur courant** : Affichez le joueur qui est actuellement en train de jouer (X ou O).
   - **Messages de fin de partie** : Affichez un message de victoire ou d'égalité.
   - **Bouton de réinitialisation** : Affichez un bouton qui réinitialise la partie.
   - **Design** : Assurez-vous que le jeu est visuellement agréable, même s'il s'agit d'un exercice simple. Vous pouvez utiliser des couleurs pour différencier les joueurs (par exemple, rouge pour "X" et bleu pour "O").

### 7. **Gestion des erreurs**
   Si l'utilisateur essaie de jouer sur une case déjà occupée, vous devez empêcher cette action et peut-être afficher un message d'erreur (par exemple, "Case déjà prise !").

### 8. **Extensions possibles (facultatif)**
   - **Afficher un score** : Comptez le nombre de victoires pour chaque joueur et affichez-le sur l'interface.
   - **Améliorer le design** : Utilisez du CSS ou une bibliothèque comme `styled-components` pour améliorer l'apparence du jeu.
   - **Utiliser la persist** : Vous pouvez utiliser le plugin de persist de Zustand pour garder l'état du jeu (par exemple, entre les sessions).

---

### Structure attendue de l'application :

- **Store Zustand** : Un fichier qui contient la logique de gestion de l'état, y compris les fonctions pour gérer les mouvements, vérifier les conditions de victoire, et réinitialiser le jeu.
- **Composant `App.jsx`** : Le composant principal qui affiche la grille et interagit avec l'état du store.
- **CSS** : Pour styliser la grille de jeu et les éléments d'interface.

---

### Points d'attention pour les étudiants :
- Assurez-vous de bien comprendre le rôle de Zustand dans la gestion de l'état global de l'application.
- Prenez votre temps pour tester chaque fonctionnalité et assurez-vous que le jeu se comporte comme prévu à chaque étape.
- La gestion des tours des joueurs, la détection de la victoire et la réinitialisation du jeu sont les étapes les plus importantes, alors concentrez-vous sur celles-ci.

### Critères de réussite :
- Le jeu doit permettre aux deux joueurs de jouer alternativement.
- Le jeu doit détecter et afficher le gagnant lorsque celui-ci existe.
- Le jeu doit afficher un message en cas d'égalité.
- Le bouton de réinitialisation doit remettre le jeu à zéro sans recharger la page.
