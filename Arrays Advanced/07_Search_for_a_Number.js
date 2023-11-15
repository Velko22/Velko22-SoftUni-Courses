function searchNumber(arr, commands) {
    let [takeCount, deleteCount, searchNumber] = commands;
  
    let takenNumbers = arr.slice(0, takeCount);
    takenNumbers.splice(0, deleteCount);
  
    let occurrences = takenNumbers.filter(num => num === searchNumber).length;
  
    console.log(`Number ${searchNumber} occurs ${occurrences} times.`);
  }
  
  // Example usage
  searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]); // Output: Number 3 occurs 1 times.
 
  