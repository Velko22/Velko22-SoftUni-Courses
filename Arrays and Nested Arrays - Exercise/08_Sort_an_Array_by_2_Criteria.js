function sortByLengthAndAlphabetical(arr) {
    arr.sort((a, b) => {
        // Compare by length
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        // If lengths are equal, compare alphabetically (case-insensitive)
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    // Output each element on a new line
    arr.forEach(element => console.log(element));
}

// Test the function with the provided examples
sortByLengthAndAlphabetical(['alpha', 'beta', 'gamma']);
sortByLengthAndAlphabetical(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortByLengthAndAlphabetical(['test', 'Deny', 'omen', 'Default']);
