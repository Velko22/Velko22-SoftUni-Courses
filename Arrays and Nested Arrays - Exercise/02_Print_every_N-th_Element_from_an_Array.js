function extractEveryNthElement(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
}

// Test the function with the provided examples
console.log(extractEveryNthElement(['5', '20', '31', '4', '20'], 2)); // Expected Output: ['5', '31', '20']
console.log(extractEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2)); // Expected Output: ['dsa', 'test']
console.log(extractEveryNthElement(['1', '2', '3', '4', '5'], 6)); // Expected Output: ['1']
