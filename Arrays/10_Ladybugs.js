function ladybugs(input) {
    const fieldSize = input[0];
    const initialPositions = input[1].split(' ').map(Number);
    const field = new Array(fieldSize).fill(0);
  
    for (const position of initialPositions) {
      if (position >= 0 && position < fieldSize) {
        field[position] = 1;
      }
    }
  
    for (let i = 2; i < input.length; i++) {
      const [position, direction, flyLength] = input[i].split(' ');
      const index = Number(position);
      const length = Number(flyLength);
  
      if (field[index] === 1) {
        field[index] = 0;
  
        let newPosition = index;
        if (direction === 'right') {
          newPosition += length;
        } else {
          newPosition -= length;
        }
  
        while (newPosition >= 0 && newPosition < fieldSize) {
          if (field[newPosition] === 0) {
            field[newPosition] = 1;
            break;
          } else {
            if (direction === 'right') {
              newPosition += length;
            } else {
              newPosition -= length;
            }
          }
        }
      }
    }
  
    console.log(field.join(' '));
  }