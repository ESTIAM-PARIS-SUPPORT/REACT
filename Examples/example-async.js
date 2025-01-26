function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function task() {
    console.log('Start');
    
    // On attend 2 secondes avant de poursuivre
    await simulateDelay(2000);
    
    console.log('End');
  }
  
  task();