function rotateArray(arr, rotations) {
    const length = arr.length;
    const rotatedArray = [];
  
    for (let i = 0; i < length; i++) {
      const newPosition = (i + rotations) % length;
      rotatedArray[newPosition] = arr[i];
    }
  
    console.log(rotatedArray.join(' '));
  }