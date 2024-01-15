function sortAndPrintNames(names) {
    // Sort the names alphabetically
    names.sort();

    // Iterate through the sorted names and print each with its number
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

// Test the function with the provided example
sortAndPrintNames(["John", "Bob", "Christina", "Ema"]);