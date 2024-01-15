function rotateArray(arr, rotations) {
    let actualRotations = rotations % arr.length;

    for (let i = 0; i < actualRotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

// Test the function with the provided examples
rotateArray(['1', '2', '3', '4'], 2); // Output: 3 4 1 2
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15); // Output: Orange Coconut Apple Banana
