# **QCM : Comprendre le cycle de vie de `count` dans l'application React**

#### **Question 1 : Initialisation de `count`**
Que fait la ligne suivante ?
```javascript
const [ count, setCount ] = useState(0);
```

1. [ ] Définit une fonction pour incrémenter `count` automatiquement.  
2. [ ] Définit un effet secondaire dans le composant.  
3. [x] Initialise l'état `count` à 0 et fournit une fonction `setCount` pour le modifier.  
4. [ ] Crée un état local dans un composant enfant.

---

#### **Question 2 : Fonctionnement du `useEffect`**
Quand la fonction principale passée à `useEffect` est-elle exécutée ?  
```javascript
useEffect(() => {
  console.log("useEffect fonction principal", count);
  return () => {
    console.log("useEffect fonction montage/démontage", count);
  };
}, [count]);
```

1. [x] À chaque fois que `count` change.  
2. [ ] Seulement lors du montage initial du composant.  
3. [ ] Seulement lorsque le composant est démonté.  
4. [ ] Lors de chaque re-render, quelle que soit la variable d'état.

---

#### **Question 3 : Retour de `useEffect`**
Quel est le rôle de la fonction retournée dans le hook `useEffect` ?  
```javascript
return () => {
  console.log("useEffect fonction montage/démontage", count);
};
```

1. [ ] Modifier automatiquement la valeur de `count`.  
2. [x] Nettoyer les effets secondaires avant que le composant ne soit démonté ou avant que l'effet ne soit réexécuté.  
3. [ ] Empêcher les re-renders inutiles.  
4. [ ] Remplacer le fonctionnement de `useState`.

---

#### **Question 4 : Le bouton et la mise à jour de l'état**
Que se passe-t-il lorsque l'utilisateur clique sur le bouton ?
```javascript
<button onClick={() => setCount(count + 1)} >+1</button>
```

1. [x] La valeur de `count` est incrémentée de 1.  
2. [ ] Le composant est démonté et remonté.  
3. [ ] Rien ne se passe, le bouton est décoratif.  
4. [ ] La fonction `useEffect` est exécutée immédiatement sans mettre à jour `count`.

---

#### **Question 5 : Dépendances du `useEffect`**
Pourquoi `[count]` est-il inclus dans la liste des dépendances du `useEffect` ?
```javascript
useEffect(() => {
  console.log("useEffect fonction principal", count);
}, [count]);
```

1. [ ] Pour s'assurer que le composant est démonté correctement.  
2. [ ] Pour forcer l'exécution du `useEffect` lors de chaque re-render.  
3. [x] Pour déclencher le `useEffect` uniquement lorsque `count` change.  
4. [ ] Pour prévenir les erreurs liées au nettoyage des effets.

---

#### **Question 6 : Le cycle de vie du composant**
Quand la console affiche-t-elle le message suivant ?  
```javascript
console.log("useEffect fonction montage/démontage", count);
```

1. [ ] Lors de la mise à jour de l'état, juste avant que le `useEffect` ne soit réexécuté.  
2. [x] Lors du démontage du composant ou avant la réexécution de l'effet avec une nouvelle valeur de `count`.  
3. [ ] Une seule fois, au montage initial du composant.  
4. [ ] Chaque fois que le bouton est cliqué.

---

#### **Question 7 : Rendu de l'interface**
Que se passe-t-il dans l'interface utilisateur lorsque l'état `count` est mis à jour avec `setCount` ?  

1. [ ] Le composant entier est démonté et remonté.  
2. [x] Le composant est re-render pour afficher la nouvelle valeur de `count`.  
3. [ ] Un nouvel effet secondaire est exécuté sans mettre à jour l'affichage.  
4. [ ] Le DOM ne change pas tant que `useEffect` n'a pas terminé son exécution.

---

#### **Question 8 : ReactDOM et le rendu initial**
Que fait cette ligne dans le code ?  
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

1. [ ] Monte le composant `App` et exécute le `useEffect` immédiatement.  
2. [ ] Crée l'état initial de `count` et initialise le cycle de vie.  
3. [x] Monte le composant `App` dans l'élément DOM avec l'ID `root`.  
4. [ ] Exécute le `useEffect` pour démarrer le cycle de vie du composant.
