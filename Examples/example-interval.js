let count = 0;

// setInterval elle comme premier argument une fonction de callback 

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);
  count++;

  // Arrête le compteur après 10 secondes
  if (count > 10) {
    clearInterval(intervalId);
    console.log("Compteur arrêté !");
  }
}, 1000); // Exécute le code toutes les 1000 ms (1 seconde)

console.log('ICI')