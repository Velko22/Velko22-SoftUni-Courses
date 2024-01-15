function extractNonDecreasingSubset(arr) {
    let result = [];
    let currentMax = -Infinity;
    for (let number of arr) {
        if (number >= currentMax) {
            currentMax = number;
            result.push(number);
        }
    }
    return result;
}

// Test the function with the provided examples
console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])); // Output: [1, 3, 8, 10, 12, 24]
console.log(extractNonDecreasingSubset([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(extractNonDecreasingSubset([20, 3, 2, 15, 6, 1])); // Output: [20]
