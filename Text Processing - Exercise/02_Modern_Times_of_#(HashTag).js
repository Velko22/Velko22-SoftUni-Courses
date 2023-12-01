function findSpecialWords(input) {
    const words = input.split(/\s+/);

    const specialWords = words.filter((word) => {
        return word.startsWith('#') && /^[a-zA-Z]+$/.test(word.slice(1));
    });

    console.log(specialWords.map((word) => word.slice(1)).join('\n'));
}

// Example usage:
const example1 = 'Nowadays everyone uses # to tag a #special word in #socialMedia';
findSpecialWords(example1);