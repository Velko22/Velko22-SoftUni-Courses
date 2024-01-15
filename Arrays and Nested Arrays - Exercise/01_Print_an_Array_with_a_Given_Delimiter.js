function joinArrayWithDelimiter(array, delimiter) {
    // Join the array elements with the given delimiter
    return array.join(delimiter);
}

// Test the function with the provided examples
console.log(joinArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-')); // Expected Output: One-Two-Three-Four-Five
console.log(joinArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_')); // Expected Output: How about no?_I_will_not_do_it!
