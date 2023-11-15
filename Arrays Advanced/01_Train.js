function trainManipulation(input) {
    let wagons = input[0].split(' ').map(Number);
    const maxCapacity = Number(input[1]);
  
    for (let i = 2; i < input.length; i++) {
      const command = input[i].split(' ');
  
      if (command[0] === 'Add') {
        const passengers = Number(command[1]);
        wagons.push(Math.min(passengers, maxCapacity));
      } else {
        const passengers = Number(command[0]);
        for (let j = 0; j < wagons.length; j++) {
          if (wagons[j] + passengers <= maxCapacity) {
            wagons[j] += passengers;
            break;
          }
        }
      }
    }
  
    console.log(wagons.join(' '));
  }
  
  // Example usage
  trainManipulation([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
  ]);
  
  trainManipulation([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
  ]);
  