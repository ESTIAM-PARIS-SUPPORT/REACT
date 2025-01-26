### TP : **Créer une Todo List avec React et Zustand**

#### Objectif du TP :
Les étudiants devront créer une application **Todo List** en utilisant **React** et **Zustand** pour gérer l'état. L'application devra permettre :

- D'afficher la liste des tâches récupérées depuis une API.
- D'ajouter de nouvelles tâches.
- De supprimer des tâches.

Ils devront utiliser une API Node.js fournie pour interagir avec les données des tâches.

---

### Étape 1 : **Préparer l'API**

1. L'API sera déjà prête à l'emploi, avec les endpoints suivants :
   - **GET /tasks** : Récupère toutes les tâches.
   - **POST /tasks** : Permet d'ajouter une nouvelle tâche.
   - **DELETE /tasks/:id** : Supprime une tâche par son ID.
2. L'API utilise des données en mémoire et n'a pas de base de données (toutes les tâches sont stockées dans un tableau sur le serveur).

---

### Étape 2 : **Initialisation du projet**

Les étudiants doivent commencer par créer un projet React avec Vite, en suivant ces étapes :
1. Créer un projet avec Vite et le configurer avec le template React.
2. Installer **Axios** pour la gestion des requêtes API et **Zustand** pour la gestion de l'état global.

---

### Étape 3 : **Création du Store avec Zustand**

1. Créez un store Zustand pour gérer l'état des tâches. Ce store devra :
   - Contenir un tableau de tâches.
   - Fournir une méthode pour récupérer les tâches depuis l'API (`fetchTasks`).
   - Fournir une méthode pour ajouter une nouvelle tâche (`addTask`).
   - Fournir une méthode pour supprimer une tâche (`deleteTask`).

2. Utilisez **Axios** pour interagir avec l'API Node.js dans ces méthodes.

---

### Étape 4 : **Création des Composants**

1. **Composant `TaskList`** :
   - Ce composant récupère la liste des tâches depuis l'API et les affiche.
   - Il doit également inclure un bouton "Delete" pour chaque tâche, permettant de supprimer une tâche.

2. **Composant `AddTask`** :
   - Ce composant contient un formulaire avec des champs pour saisir le titre et la description d'une tâche.
   - Lorsqu'une nouvelle tâche est ajoutée via ce formulaire, elle doit être envoyée à l'API pour être ajoutée à la liste.

3. **Composant `App`** :
   - Ce composant devra intégrer `TaskList` et `AddTask` pour afficher la Todo List complète avec la possibilité d'ajouter et de supprimer des tâches.

---

### Étape 5 : **Test de l'application**

1. Vérifiez que les tâches sont correctement récupérées depuis l'API et affichées.
2. Testez l'ajout de nouvelles tâches et vérifiez qu'elles sont bien envoyées à l'API.
3. Vérifiez que la suppression des tâches fonctionne et que la liste est mise à jour après chaque suppression.

---

### Conclusion du TP

À la fin de ce TP, les étudiants auront créé une application Todo List fonctionnelle avec React et Zustand, utilisant une API pour gérer les tâches. Ils auront appris à travailler avec des requêtes API, à gérer un état global avec Zustand et à manipuler des données dans une application React.
