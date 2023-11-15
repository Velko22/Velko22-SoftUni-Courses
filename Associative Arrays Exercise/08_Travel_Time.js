function travelDestinations(input) {
    let destinations = {};
  
    for (let line of input) {
      let [country, town, cost] = line.split(' > ');
      cost = Number(cost);
  
      if (!destinations.hasOwnProperty(country)) {
        destinations[country] = {};
      }
  
      if (!destinations[country].hasOwnProperty(town)) {
        destinations[country][town] = cost;
      } else {
        destinations[country][town] = Math.min(destinations[country][town], cost);
      }
    }
  
    let sortedCountries = Object.keys(destinations).sort();
  
    for (let country of sortedCountries) {
      let sortedTowns = Object.entries(destinations[country])
        .sort((a, b) => a[1] - b[1])
        .map(entry => `${entry[0]} -> ${entry[1]}`);
  
      console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }
  }
  
  // Example usage:
  travelDestinations([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
  ]);
  