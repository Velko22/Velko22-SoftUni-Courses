function revealWords(words, template) {
    const wordList = words.split(', ');
    const templateList = template.split(' ');

    const result = templateList.map((wordTemplate) => {
        if (wordTemplate.includes('*')) {
            const wordLength = wordTemplate.length;
            const matchingWord = wordList.find((word) => word.length === wordLength);
            return matchingWord || wordTemplate;
        }
        return wordTemplate;
    });

    return result.join(' ');
}

// Example usage:
const example1 = revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log(example1); // Output: softuni is great place for learning new programming languages