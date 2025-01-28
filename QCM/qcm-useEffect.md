# QCM sur useEffect

## Questions

### 1. Quel est le rôle principal de `useEffect` dans React ?
- [ ] Gérer l'état local des composants
- [ ] Exécuter des effets secondaires dans les composants fonctionnels
- [ ] Rendre des éléments JSX
- [ ] Gérer les événements utilisateur

### 2. Quelle est la syntaxe correcte pour utiliser `useEffect` ?
- [ ] `useEffect(() => { /* code */ }, [dependencies])`
- [ ] `useEffect(() => { /* code */ }, [dependencies])`
- [ ] `useEffect([dependencies], () => { /* code */ })`
- [ ] `useEffect({ dependencies: [], effect: () => { /* code */ } })`

### 3. Que se passe-t-il si le tableau de dépendances de `useEffect` est vide ?
- [ ] L'effet s'exécute à chaque rendu
- [ ] L'effet s'exécute uniquement au montage et au démontage du composant
- [ ] L'effet ne s'exécute jamais
- [ ] L'effet s'exécute uniquement lorsque les props changent

### 4. Comment nettoyer un effet dans `useEffect` ?
- [ ] En retournant une fonction de nettoyage dans le callback de `useEffect`
- [ ] En retournant une fonction de nettoyage dans le callback de `useEffect`
- [ ] En appelant une fonction `cleanup` à l'intérieur de `useEffect`
- [ ] En utilisant un hook séparé pour le nettoyage

### 5. Quand `useEffect` s'exécute-t-il si le tableau de dépendances contient une variable d'état ?
- [ ] À chaque rendu
- [ ] Chaque fois que la variable d'état change
- [ ] Uniquement au montage du composant
- [ ] Uniquement au démontage du composant

### 6. Que se passe-t-il si vous omettez le tableau de dépendances dans `useEffect` ?
- [ ] L'effet s'exécute uniquement au montage et au démontage du composant
- [ ] L'effet s'exécute à chaque rendu
- [ ] L'effet ne s'exécute jamais
- [ ] L'effet s'exécute uniquement lorsque les props changent

### 7. Comment pouvez-vous éviter les boucles infinies avec `useEffect` ?
- [ ] En utilisant toujours un tableau de dépendances vide
- [ ] En s'assurant que les dépendances ne changent pas à chaque rendu
- [ ] En évitant d'utiliser des fonctions dans le tableau de dépendances
- [ ] En utilisant `useState` pour mémoriser les dépendances