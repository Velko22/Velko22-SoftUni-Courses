function parseJSON(input) {
    let dictionary = {};
  
    for (let json of input) {
      let obj = JSON.parse(json);
      let term = Object.keys(obj)[0];
      let definition = obj[term];
  
      dictionary[term] = definition;
    }
  
    // Sort the dictionary by terms
    let sortedTerms = Object.keys(dictionary).sort();
  
    // Print the terms and definitions
    for (let term of sortedTerms) {
      let definition = dictionary[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    }
  }
  
  // Example usage
  parseJSON([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ]);