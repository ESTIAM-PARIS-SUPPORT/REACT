# QCM sur Zustand

## Questions

### 1. Comment installer Zustand dans un projet ?
- [ ] `npm install redux`
- [ ] `npm install zustand-store`
- [x] `npm install zustand`
- [ ] `npm install react-zustand`

### 2. Où définir le store dans un projet utilisant Zustand ?
- [ ] Dans le fichier principal de l'application (ex. `App.js`)
- [x] Dans un fichier séparé (ex. `store.js` ou `useStore.js`)
- [ ] Dans chaque composant qui utilise le store
- [ ] Dans le fichier de configuration du projet

### 3. Comment ajouter un utilisateur dans le store avec Zustand ?
- [ ] `set((state) => ({ users: state.users.push(user) }))`
- [x] `set((state) => ({ users: [...state.users, user] }))`
- [ ] `set((state) => ({ users: state.users.concat(user) }))`
- [ ] `set((state) => ({ users: state.users.add(user) }))`

### 4. Comment supprimer un utilisateur du store avec Zustand ?
- [ ] `set((state) => ({ users: state.users.remove(id) }))`
- [x] `set((state) => ({ users: state.users.filter((user) => user.id !== id) }))`
- [ ] `set((state) => ({ users: state.users.delete(id) }))`
- [ ] `set((state) => ({ users: state.users.splice(id, 1) }))`

### 5. Comment consommer le store dans un composant avec Zustand ?
- [ ] En utilisant un `Provider` pour envelopper l'application
- [x] En utilisant directement le hook `useStore` dans le composant
- [ ] En utilisant un contexte global
- [ ] En important le store dans chaque composant

### 6. Quel est l'un des avantages de Zustand par rapport à Redux Toolkit ?
- [ ] Zustand nécessite plus de boilerplate
- [x] Zustand est plus simple et ne nécessite pas de boilerplate
- [ ] Zustand a de moins bonnes performances
- [ ] Zustand nécessite un contexte global

### 7. Comment structurer le store avec Zustand ?
- [ ] Il faut suivre une structure prédéfinie
- [x] Tu peux structurer ton store comme tu le souhaites
- [ ] Il faut utiliser des reducers
- [ ] Il faut utiliser des actions et des réducteurs séparés

### 8. Comment accéder à la liste des utilisateurs dans un composant avec Zustand ?
- [ ] `const users = useStore((state) => state.getUsers());`
- [x] `const users = useStore((state) => state.users);`
- [ ] `const users = useStore((state) => state.usersList);`
- [ ] `const users = useStore((state) => state.fetchUsers());`

### 9. Comment vider la liste des utilisateurs dans le store avec Zustand ?
- [ ] `set((state) => ({ users: state.users.clear() }))`
- [x] `set({ users: [] })`
- [ ] `set((state) => ({ users: state.users.empty() }))`
- [ ] `set((state) => ({ users: state.users.reset() }))`

### 10. Quelle est la particularité de Zustand par rapport à Redux Toolkit en termes de contexte global ?
- [ ] Zustand nécessite un contexte global
- [x] Zustand fonctionne sans avoir besoin de créer un contexte global
- [ ] Zustand utilise un `Provider` pour envelopper l'application
- [ ] Zustand nécessite un contexte pour chaque composant
