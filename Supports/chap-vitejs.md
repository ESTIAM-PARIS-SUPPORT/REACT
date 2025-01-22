# Vite JS

### **Prérequis**
Assurez-vous que les éléments suivants sont installés :
1. **Node.js** (version 14 ou supérieure, idéalement la version LTS).
   - Vérifiez avec `node -v` dans le terminal.
2. **npm** ou **yarn** (généralement inclus avec Node.js).

---

### **Créer un projet avec Vite.js**
1. Ouvrez un terminal ou une invite de commande.
2. Exécutez la commande suivante pour créer un projet avec Vite :

```bash
npm create vite@latest my-react-app
```

   - Vous serez invité à choisir un nom de projet, ou utilisez `my-react-app` comme par défaut.
   - Sélectionnez ensuite `React` comme framework et `JavaScript` ou `TypeScript` selon vos préférences.

   Exemple pour TypeScript :
   ```bash
   npm create vite@latest my-react-app -- --template react-ts
   ```

---

### **Installer les dépendances**
Après avoir créé le projet, entrez dans le dossier du projet et installez les dépendances nécessaires :

```bash
cd my-react-app
npm install
```

---

### **Structure d’un projet Vite.js avec React**
Une fois le projet créé, voici la structure des fichiers :
```
my-react-app/
├── public/          # Fichiers statiques
├── src/
│   ├── App.jsx      # Composant principal
│   ├── main.jsx     # Point d'entrée de l'application
│   └── index.css    # Feuille de styles globale
├── package.json     # Fichier de configuration npm
├── vite.config.js   # Configuration de Vite
```

---

### **Démarrer le serveur de développement**
Pour démarrer le serveur de développement, exécutez :

```bash
npm run dev
```

- Accédez à l'application dans votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`).

---

### **Modifier le projet React**
1. Ouvrez le fichier `src/App.jsx` pour modifier le composant principal.
2. Exemple d'un composant simple :

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React avec Vite.js !</h1>
      <p>Vite est super rapide 🚀</p>
    </div>
  );
}

export default App;
```

Voici un tutoriel détaillé pour intégrer **Tailwind CSS** dans votre projet, que ce soit un projet existant ou un nouveau projet (par exemple, avec React et Vite.js).

---
### **Installer Tailwind CSS**

#### **Pour un projet existant**
Si vous avez déjà un projet (par exemple, un projet React avec Vite), commencez par installer Tailwind CSS :

1. Ouvrez votre terminal dans le répertoire de votre projet.
2. Exécutez la commande suivante pour installer Tailwind et ses dépendances :

```bash
npm install -D tailwindcss postcss autoprefixer
```

3. Initialisez un fichier de configuration Tailwind avec la commande suivante :

```bash
npx tailwindcss init
```

Cela génère un fichier `tailwind.config.js` à la racine de votre projet.

---

### **Configurer Tailwind CSS**

#### **Mise à jour du fichier `tailwind.config.js`**
Ajoutez les chemins vers vos fichiers où vous utiliserez Tailwind dans la propriété `content`. Par exemple :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Fichier HTML de base
    "./src/**/*.{js,jsx,ts,tsx}", // Composants React ou fichiers JS/TS
  ],
  theme: {
    extend: {}, // Ajoutez vos personnalisations ici si nécessaire
  },
  plugins: [],
};
```

---

### **Ajouter Tailwind dans votre fichier CSS**

1. Localisez le fichier CSS principal de votre projet (par exemple, `src/index.css`).
2. Remplacez son contenu par les directives de base de Tailwind :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### **Étape 4 : Démarrer le projet**

1. Si vous utilisez Vite, démarrez votre serveur de développement :

```bash
npm run dev
```

2. Vous pouvez maintenant utiliser les classes Tailwind dans vos fichiers JSX, HTML ou autres.

---

### **Exemple d'utilisation**

#### **Exemple dans un fichier React (JSX)**
Modifiez un composant React pour inclure des classes Tailwind :

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600 mt-4">
          Avec Tailwind, le style devient un jeu d'enfant 🚀
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cliquez-moi
        </button>
      </div>
    </div>
  );
}

export default App;
```

---

### **Personnalisation de Tailwind CSS**

#### **Étendre le thème**
Dans le fichier `tailwind.config.js`, vous pouvez ajouter vos propres couleurs, polices ou autres extensions :

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: "#FF6347",
      },
    },
  },
};
```

#### **Ajouter des plugins**
Ajoutez des plugins pour des fonctionnalités supplémentaires, comme les formulaires ou les typographies :

```bash
npm install @tailwindcss/forms @tailwindcss/typography
```

Dans le fichier `tailwind.config.js`, ajoutez les plugins :

```javascript
plugins: [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
],
```
