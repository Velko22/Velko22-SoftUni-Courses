function processMatrix(input) {
    // Parse the input strings into a matrix of numbers
    let matrix = input.map(row => row.split(' ').map(Number));

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let size = matrix.length;

    // Calculate sums of the main and secondary diagonals
    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][size - 1 - i];
    }

    // Modify matrix if diagonals have equal sum
    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (row !== col && col !== size - 1 - row) {
                    matrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Example usage
processMatrix(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
processMatrix(['1 1 1', '1 1 1', '1 1 0']);
