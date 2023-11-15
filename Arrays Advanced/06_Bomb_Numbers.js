function detonateSequence(sequence, bomb) {
    const [specialNumber, power] = bomb;
  
    while (sequence.includes(specialNumber)) {
      let bombIndex = sequence.indexOf(specialNumber);
  
      let startIndex = Math.max(0, bombIndex - power);
      let endIndex = Math.min(sequence.length - 1, bombIndex + power);
  
      sequence.splice(startIndex, endIndex - startIndex + 1);
    }
  
    let sum = sequence.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
  }
  
  // Example usage
  detonateSequence([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); // Output: 12
  
  