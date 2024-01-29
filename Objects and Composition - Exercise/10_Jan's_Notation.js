function calculateResult(instructions) {
    const stack = [];

    for (const instruction of instructions) {
        if (typeof instruction === 'number') {
            stack.push(instruction);
        } else if (typeof instruction === 'string') {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (instruction) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    if (operand2 === 0) {
                        console.log('Error: division by zero!');
                        return;
                    }
                    stack.push(operand1 / operand2);
                    break;
                default:
                    console.log(`Error: unknown operator ${instruction}`);
                    return;
            }
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

// Examples
calculateResult([3, 4, '+']); // Output: 7
calculateResult([5, 3, 4, '*', '-']); // Output: -7
calculateResult([7, 33, 8, '-']); // Output: Error: too many operands!
calculateResult([15, '/']); // Output: Error: not enough operands!
