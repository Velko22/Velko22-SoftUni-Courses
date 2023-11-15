function customSort(arr) {
    arr.sort((a, b) => b - a);
  
    let result = [];
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      result.push(arr[i]);
      if (arr.length - 1 - i !== i) {
        result.push(arr[arr.length - 1 - i]);
      }
    }
  
    console.log(result.join(' '));
  }
  
  // Example usage
  customSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
  customSort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
  