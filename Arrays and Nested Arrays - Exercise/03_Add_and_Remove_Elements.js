function addOrRemove(commands) {
    let array = [];
    let currentNumber = 1;

    commands.forEach(command => {
        if (command === "add") {
            array.push(currentNumber);
        } else if (command === "remove") {
            array.pop();
        }
        currentNumber++;
    });

    if (array.length === 0) {
        console.log("Empty");
    } else {
        array.forEach(element => console.log(element));
    }
}

// Test the function with the provided examples
addOrRemove(['add', 'add', 'add', 'add']); // Output: 1 2 3 4
addOrRemove(['add', 'add', 'remove', 'add', 'add']); // Output: 1 4 5
addOrRemove(['remove', 'remove', 'remove']); // Output: Empty
