# React State

Un **state** permet d'ajouter un état local à un composant fonctionnel. Contrairement aux props, qui sont immuables et passées par un composant parent, le state peut être mis à jour localement à l'intérieur du composant, et React gère automatiquement le re-rendu lorsqu'il change.

En React, pour définir et manipuler un state dans un composant fonctionnel, nous utilisons le Hook `useState`.

### Déclaration du State

Voici un exemple de base avec `useState` :

```jsx

const Counter = () => {
  // Déclaration d'un state local "count" avec une valeur initiale de 0
  const [count, setCount] = React.useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1); // ✅ Met à jour le state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Explications

1. **Lecture du state :** Le state est lu directement à partir de la valeur retournée par `useState` (ici, `count`).
2. **Mise à jour du state :** Pour modifier le state, on utilise la fonction retournée par `useState` (ici, `setCount`), qui déclenche un re-rendu du composant avec la nouvelle valeur.

> ⚠️ Vous **ne pouvez pas** modifier directement le state (par exemple, `count++` ne déclencherait pas de re-rendu). La mise à jour doit se faire via la fonction fournie par `useState`.

---

## Exemple 1 : Compteur avec incrémentation automatique

Voici un compteur qui s'incrémente automatiquement toutes les secondes en utilisant `useEffect` pour gérer l'effet de côté (incrémentation régulière) :


---

## Exercice 1 : Horloge avec State

Ré-implémentez une horloge en utilisant `useState` pour gérer le temps qui passe (heures, minutes, secondes) et `useEffect` pour mettre à jour le state chaque seconde.

---

## Exercice 2 : Compteur cyclique

Réalisez un compteur qui s'incrémente toutes les secondes, mais qui revient à 0 lorsqu'il atteint 10 (compteur cyclique avec modulo 10).


---

## Récapitulatif

- Utilisez **`useState`** pour définir et lire le state local.
- Utilisez **`setState`** (fonction retournée par `useState`) pour mettre à jour le state.
- Utilisez **`useEffect`** pour gérer les effets de côté, comme la mise à jour régulière avec `setInterval`.
