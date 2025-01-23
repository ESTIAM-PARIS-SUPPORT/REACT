# QCM : Analyse de l'application "Devinez le bouton"

#### **Question 1**  
Que fait le code suivant ?

```javascript
function genPos() {
    return Math.floor(Math.random() * 4);
}
```

- [ ] A. Ce code retourne un entier aléatoire entre 1 et 4 inclus.  
- [ ] B. Ce code retourne un entier aléatoire entre 0 et 3 inclus.  
- [ ] C. Ce code génère une position fixe pour le bouton cible.  
- [ ] D. Ce code initialise tous les boutons avec des positions différentes.

---

#### **Question 2**  
Quel est le rôle de ce code extrait dans le composant `Btn` ?

```javascript
const [count, setCount] = React.useState(2);
```

- [ ] A. `count` garde en mémoire combien de boutons sont cliquables dans l'application.  
- [ ] B. `count` initialise le score du joueur à 2.  
- [ ] C. `count` suit le nombre de tentatives restantes pour trouver le bouton correct.  
- [ ] D. `count` représente l'indice du bouton cible.

---

#### **Question 3**  
Que fait cette partie de code dans la fonction `handleClick` lorsqu’un bouton est cliqué ?  

```javascript
if (index === target) {
    setMessage("✨ Bravo ! Vous avez trouvé ✨");
    setStatus(false);
    setScore(1);
    return;
}
```

- [ ] A. Ce code affiche un message, désactive le jeu, et met à jour le score si le bouton correct est cliqué.  
- [ ] B. Ce code vérifie si tous les boutons ont été cliqués.  
- [ ] C. Ce code génère un nouveau bouton cible après chaque clic.  
- [ ] D. Ce code augmente les chances de gagner si le bouton cible est cliqué.

---

#### **Question 4**  
Que représente cette partie dans le rendu du composant ?

```javascript
[0, 1, 2, 3].map((index) => (
    <button
        key={index}
        onClick={() => handleClick(index)}
        className="px-4 py-2 text-lg rounded-lg bg-gray-700 hover:bg-gray-800"
    >
        <i className="fas fa-question-circle">  </i>
    </button>
))
```

- [ ] A. Elle affiche 4 boutons interactifs, chacun ayant une position unique et un comportement lié à l’indice.  
- [ ] B. Elle affiche un seul bouton, mais celui-ci change dynamiquement sa position.  
- [ ] C. Elle affiche une liste de boutons statiques qui ne peuvent pas être cliqués.  
- [ ] D. Elle affiche les scores de l'utilisateur sous forme de boutons.

---

#### **Question 5**  
Que fait ce code lorsqu'on clique sur "Rejouer" ?  

```javascript
const reset = () => {
    setScore(0);
    setTarget(genPos());
    setStatus(true);
    setCount(2);
    setMessage("Trouvez le bouton en cliquant dessus");
};
```

- [ ] A. Il réinitialise l'état du jeu, sélectionne un nouveau bouton cible, et remet le message initial.  
- [ ] B. Il ajoute deux nouvelles tentatives pour l'utilisateur.  
- [ ] C. Il conserve le score actuel, mais génère un nouveau bouton cible.  
- [ ] D. Il affiche les statistiques du joueur et relance une nouvelle partie.

---

#### **Question 6**  
Quel est le rôle du rendu conditionnel suivant ?

```javascript
if (status)
    return (
        <React.Fragment>
            <p className="mb-6 text-lg">{message}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[0, 1, 2, 3].map((index) => (
                    <button key={index} onClick={() => handleClick(index)} className="...">
                        <i className="fas fa-question-circle"></i>
                    </button>
                ))}
            </div>
        </React.Fragment>
    )
else
    return (
        <React.Fragment>
            <p>Score : {score} - {message}</p>
            <button onClick={() => reset()} className="...">Rejouer</button>
        </React.Fragment>
    )
```

- [ ] A. Il affiche les boutons si la partie est en cours et affiche le score une fois la partie terminée.  
- [ ] B. Il génère automatiquement des boutons jusqu'à ce que le bon soit trouvé.  
- [ ] C. Il fait apparaître et disparaître les boutons en fonction de l'état `status`.  
- [ ] D. Il affiche toujours le message et les boutons quelle que soit l’état de la partie.
