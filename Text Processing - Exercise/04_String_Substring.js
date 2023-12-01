function findWordInText(word, text) {
    const lowerWord = word.toLowerCase();
    const lowerText = text.toLowerCase();

    const wordsInText = lowerText.split(/\s+/);

    if (wordsInText.includes(lowerWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// Example usage:
const example1Word = 'javascript';
const example1Text = 'JavaScript is the best programming language';
findWordInText(example1Word, example1Text);
// Output:
// javascript

const example2Word = 'python';
const example2Text = 'JavaScript is the best programming language';
findWordInText(example2Word, example2Text);
// Output:
// python not found!
