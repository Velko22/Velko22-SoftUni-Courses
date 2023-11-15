function orderStrings(arr) {
    arr.sort((a, b) => {
      // Compare lengths in ascending order
      let lengthComparison = a.length - b.length;
  
      // If lengths are the same, compare alphabetically in ascending order (case-insensitive)
      if (lengthComparison === 0) {
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
      }
  
      return lengthComparison;
    });
  
    console.log(arr.join('\n'));
  }
  
  // Example usage
  orderStrings(['alpha', 'beta', 'gamma']);
 
  