function performOperations(numStr, op1, op2, op3, op4, op5) {
    // Parse the initial number
    let number = Number(numStr);

    // List of operations to perform in order
    const operations = [op1, op2, op3, op4, op5];

    // Define the actions for each operation
    const actions = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet': num => num * 0.8
    };

    // Perform each operation in sequence
    for (const op of operations) {
        number = actions[op](number);
        console.log(number.toFixed(1));
    }
}

// Test the function with examples
performOperations('32', 'chop', 'chop', 'chop', 'chop', 'chop'); // Output: 16, 8, 4, 2, 1
performOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); // Output: 3.0, 4.0, 2.0, 6.0, 4.8
