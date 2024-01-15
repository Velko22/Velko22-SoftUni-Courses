function extractAndConvertWords(inputString) {
    // Regular expression to match words
    const wordPattern = /\b[a-zA-Z]+\b/g;

    // Extract words and convert them to upper case
    const words = inputString.match(wordPattern).map(word => word.toUpperCase());

    // Join the words with ', ' and output the result
    return words.join(', ');
}

// Test the function with examples
console.log(extractAndConvertWords('Hi, how are you?')); // Expected Output: HI, HOW, ARE, YOU
console.log(extractAndConvertWords('hello')); // Expected Output: HELLO
