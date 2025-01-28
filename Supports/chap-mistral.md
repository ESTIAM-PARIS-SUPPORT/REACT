# Cours sur l'Intégration de Mistral avec Express

### Introduction

Dans ce cours, nous allons configurer un serveur Express pour utiliser l'API Mistral. Nous allons créer une route POST pour recevoir des messages de chat et obtenir des réponses en utilisant le modèle de langage de Mistral.

### Prérequis

- Node.js et npm installés sur votre machine.
- Un compte Mistral et une clé API.

### Étape 1 : Initialiser le Projet

1. **Créer un nouveau projet Node.js** :

   ```bash
   mkdir mistral-express-demo
   cd mistral-express-demo
   npm init -y
   ```

2. **Installer les dépendances nécessaires** :

   ```bash
   npm install express cors @mistralai/mistralai
   ```

### Étape 2 : Configurer le Serveur Express

1. **Créer un fichier `index.js`** :

   ```javascript
   import express from 'express';
   import cors from 'cors';
   import { Mistral } from '@mistralai/mistralai';

   const app = express();
   const port = 3000;

   const apiKey = process.env.MISTRAL_API_KEY;

   const client = new Mistral({ apiKey: apiKey });

   app.use(express.json());
   app.use(cors());

   app.post('/openai', async (req, res) => {
       const { messages } = req.body;

       const chatResponse = await client.chat.complete({
           model: 'mistral-large-latest',
           messages: messages,
       });

       console.log('Chat:', chatResponse.choices[0].message.content);

       res.status(200).json({ content: chatResponse.choices[0].message.content });
   });

   app.listen(port, () => {
       console.log(`Server running on http://localhost:${port}`);
   });
   ```

### Étape 3 : Configurer la Clé API Mistral

1. **Créer un fichier `.env`** à la racine de votre projet pour stocker votre clé API Mistral :

   ```
   MISTRAL_API_KEY=votre_cle_api_ici
   ```

2. **Installer le package `dotenv`** pour charger les variables d'environnement :

   ```bash
   npm install dotenv
   ```

3. **Modifier `index.js`** pour charger les variables d'environnement :

   ```javascript
   import express from 'express';
   import cors from 'cors';
   import { Mistral } from '@mistralai/mistralai';
   import dotenv from 'dotenv';

   dotenv.config();

   const app = express();
   const port = 3000;

   const apiKey = process.env.MISTRAL_API_KEY;

   const client = new Mistral({ apiKey: apiKey });

   app.use(express.json());
   app.use(cors());

   app.post('/openai', async (req, res) => {
       const { messages } = req.body;

       const chatResponse = await client.chat.complete({
           model: 'mistral-large-latest',
           messages: messages,
       });

       console.log('Chat:', chatResponse.choices[0].message.content);

       res.status(200).json({ content: chatResponse.choices[0].message.content });
   });

   app.listen(port, () => {
       console.log(`Server running on http://localhost:${port}`);
   });
   ```

### Étape 4 : Tester l'API

1. **Démarrer le serveur** :

   ```bash
   node index.js
   ```

2. **Utiliser un outil comme Postman ou cURL pour envoyer une requête POST à `http://localhost:3000/openai`** :

   ```json
   {
       "messages": [
           {
               "role": "user",
               "content": "Bonjour, comment ça va ?"
           }
       ]
   }
   ```

3. **Vous devriez recevoir une réponse JSON avec le contenu de la réponse de chat** :

   ```json
   {
       "content": "Bonjour ! Je vais bien, merci. Et vous ?"
   }
   ```
