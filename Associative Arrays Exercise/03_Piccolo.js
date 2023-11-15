function parkingLot(input) {
    let parking = new Set();
  
    for (let line of input) {
      let [direction, carNumber] = line.split(', ');
  
      if (direction === 'IN') {
        parking.add(carNumber);
      } else if (direction === 'OUT') {
        parking.delete(carNumber);
      }
    }
  
    if (parking.size === 0) {
      console.log('Parking Lot is Empty');
    } else {
      let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));
      console.log(sortedCars.join('\n'));
    }
  }
  
  // Example usage:
  parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
  ]);
 