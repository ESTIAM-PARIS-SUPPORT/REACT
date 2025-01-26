# Immer

### 1. **Installer Immer**
Installer Immer dans le projet :
```bash
npm install immer
```

---

### 2. **Créer un Store avec Immer**
Zustand offre un middleware pour utiliser Immer facilement. Voici un exemple :

```javascript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    users: [], // État initial

    // Ajouter un utilisateur
    addUser: (user) =>
      set((state) => {
        state.users.push(user); // Immer rend cela possible
      }),

    // Supprimer un utilisateur par ID
    removeUser: (id) =>
      set((state) => {
        state.users = state.users.filter((user) => user.id !== id);
      }),

    // Vider la liste des utilisateurs
    clearUsers: () =>
      set((state) => {
        state.users = [];
      }),
  }))
);

export default useStore;
```

---

### 3. **Utiliser le Store dans les Composants**

Consommer ce store dans les composants comme d’habitude :

#### Exemple 1 : Ajouter des utilisateurs
```javascript
import React, { useState } from "react";
import useStore from "./store";

function AddUser() {
  const [name, setName] = useState("");
  const addUser = useStore((state) => state.addUser);

  const handleSubmit = () => {
    addUser({ id: Date.now(), name }); // Ajoute un utilisateur avec un ID unique
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom d'utilisateur"
      />
      <button onClick={handleSubmit}>Ajouter</button>
    </div>
  );
}

export default AddUser;
```

#### Exemple 2 : Afficher les utilisateurs
```javascript
import React from "react";
import useStore from "./store";

function UserList() {
  const users = useStore((state) => state.users); // Accède à la liste des utilisateurs
  const removeUser = useStore((state) => state.removeUser); // Action pour supprimer un utilisateur

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => removeUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

---

### Pourquoi utiliser Immer avec Zustand ?
- **Code lisible** : Plus besoin de recréer l’état entier manuellement (par exemple avec `...state`).
- **Facilité** : Modifie directement l’état (comme s’il était mutable), mais Immer garantit qu’il reste immuable.
- **Moins d'erreurs** : On se concentre sur la logique métier, Immer gère l'immuabilité.
