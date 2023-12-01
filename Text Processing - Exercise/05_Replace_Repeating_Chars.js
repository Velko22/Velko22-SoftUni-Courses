function compressString(input) {
    // Initialize an empty string to store the compressed result
    let compressedString = '';

    // Iterate through each character in the input string
    for (let i = 0; i < input.length; i++) {
        // If the current character is different from the previous one, add it to the result
        if (i === 0 || input[i] !== input[i - 1]) {
            compressedString += input[i];
        }
    }

    return compressedString;
}

// Example usage:
const example1 = 'aaaaabbbbbcdddeeeedssaa';
console.log(compressString(example1)); // Output: abcdedsa