function removeRepeatingElements(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
  
    console.log(uniqueArray.join(' '));
  }
  
  // Example usage
  removeRepeatingElements([1, 2, 3, 4]);
  removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);
  removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5]);
  