function isMatrixMagical(matrix) {
    let sumRow = matrix.map(row => row.reduce((a, b) => a + b));
    let sumCol = matrix[0].map((_, colIndex) => matrix.reduce((a, b) => a + b[colIndex], 0));

    let allSums = sumRow.concat(sumCol);
    return allSums.every((val, _, arr) => val === arr[0]);
}

// Test the function with the provided examples
console.log(isMatrixMagical([[4, 5, 6], [6, 5, 4], [5, 5, 5]])); // true
console.log(isMatrixMagical([[11, 32, 45], [21, 0, 1], [21, 1, 1]])); // false
console.log(isMatrixMagical([[1, 0, 0], [0, 0, 1], [0, 1, 0]])); // true
