function countOccurrences(input) {
    let wordsToFind = input.shift().split(' ');
    let occurrences = {};
  
    for (let word of wordsToFind) {
      occurrences[word] = 0;
    }
  
    for (let sentence of input) {
      let words = sentence
        .toLowerCase()
        .match(/\b\w+\b/g); // Extract words from the sentence using regex
  
      if (words) {
        for (let word of words) {
          if (occurrences.hasOwnProperty(word)) {
            occurrences[word]++;
          }
        }
      }
    }
  
    // Sort the words by count in descending order
    let sortedWords = Object.entries(occurrences)
      .sort((a, b) => b[1] - a[1])
      .forEach(([word, count]) => console.log(`${word} - ${count}`));
  }
  
  // Example usage:
  let input1 = [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
  ];
  
  countOccurrences(input1);
  