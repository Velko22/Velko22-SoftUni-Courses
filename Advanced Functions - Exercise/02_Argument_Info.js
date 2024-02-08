function argumentInfo() {
    const args = Array.from(arguments);
    const typeCount = {};

    args.forEach(arg => {
        const argType = typeof arg;
        const argValue = arg instanceof Function ? arg.toString() : arg;
        const argDescription = `${argType}: ${argValue}`;

        console.log(argDescription);

        if (typeCount[argType]) {
            typeCount[argType]++;
        } else {
            typeCount[argType] = 1;
        }
    });

    // Display type count summary in descending order
    Object.entries(typeCount)
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => {
            console.log(`${entry[0]} = ${entry[1]}`);
        });
}

// Example usage:
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
