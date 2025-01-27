
// une fonction qui retourne une promesse 
function simulateDelay(ms) {
   // une promesse c'est un objet qui permet d'encapsuler une fonction asynchrone 
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function task() {
    // synchrone dans une async / await 
    console.log('Start');
    
    // On attend 2 secondes avant de poursuivre
    await simulateDelay(2000);
    
    // après on execute ce code
    console.log('End');

    // ce que retourne la promesse
    return "Hello async"
  }
  
  // then permet de récupérer le résulat de l'async/await qui est une promesse
  task().then(console.log)

  // synchrone 
  console.log('Oups');
