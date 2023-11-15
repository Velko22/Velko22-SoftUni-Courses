function arrayManipulation(numbers, commands) {
    for (let command of commands) {
      let tokens = command.split(' ');
      let action = tokens[0];
  
      switch (action) {
        case 'add':
          let addIndex = Number(tokens[1]);
          let addElement = Number(tokens[2]);
          numbers.splice(addIndex, 0, addElement);
          break;
  
        case 'addMany':
          let addManyIndex = Number(tokens[1]);
          let addManyElements = tokens.slice(2).map(Number);
          numbers.splice(addManyIndex, 0, ...addManyElements);
          break;
  
        case 'contains':
          let containsElement = Number(tokens[1]);
          let indexOfElement = numbers.indexOf(containsElement);
          console.log(indexOfElement);
          break;
  
        case 'remove':
          let removeIndex = Number(tokens[1]);
          numbers.splice(removeIndex, 1);
          break;
  
        case 'shift':
          let shiftPositions = Number(tokens[1]);
          for (let i = 0; i < shiftPositions; i++) {
            let shiftedElement = numbers.shift();
            numbers.push(shiftedElement);
          }
          break;
  
        case 'sumPairs':
          numbers = sumPairs(numbers);
          break;
  
        case 'print':
          console.log('[ ' + numbers.join(', ') + ' ]');
          break;
      }
    }
  
    function sumPairs(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i += 2) {
        let currentPairSum = arr[i] + (arr[i + 1] || 0);
        result.push(currentPairSum);
      }
      return result;
    }
  }
  
  // Example usage
  arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
  