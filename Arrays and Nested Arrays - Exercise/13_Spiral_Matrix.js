function generateSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }

    let num = 1;
    let startRow = 0, endRow = rows - 1;
    let startCol = 0, endCol = cols - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Traverse Right
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num++;
        }
        startRow++;

        // Traverse Down
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num++;
        }
        endCol--;

        // Traverse Left
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = num++;
            }
            endRow--;
        }

        // Traverse Up
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = num++;
            }
            startCol++;
        }
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Example usage
generateSpiralMatrix(5, 5);
generateSpiralMatrix(3, 3);
