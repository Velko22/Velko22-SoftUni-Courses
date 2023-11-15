function collectResources(input) {
    let resources = {};
  
    for (let i = 0; i < input.length; i += 2) {
      let resource = input[i];
      let quantity = Number(input[i + 1]);
  
      if (!resources.hasOwnProperty(resource)) {
        resources[resource] = 0;
      }
  
      resources[resource] += quantity;
    }
  
    for (let [resource, quantity] of Object.entries(resources)) {
      console.log(`${resource} -> ${quantity}`);
    }
  }
  
  // Example usage:
  collectResources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
  ]);