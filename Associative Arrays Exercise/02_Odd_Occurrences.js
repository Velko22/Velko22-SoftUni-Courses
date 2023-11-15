function extractOddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let occurrences = {};
  
    for (let word of words) {
      if (!occurrences.hasOwnProperty(word)) {
        occurrences[word] = 0;
      }
  
      occurrences[word]++;
    }
  
    let result = [];
  
    for (let [word, count] of Object.entries(occurrences)) {
      if (count % 2 !== 0) {
        result.push(word);
      }
    }
  
    console.log(result.join(' '));
  }
  
  // Example usage:
  extractOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
