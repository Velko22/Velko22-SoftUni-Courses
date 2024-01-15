function createOrbits([width, height, starX, starY]) {
    // Initialize the matrix with zeros
    let matrix = new Array(height).fill().map(() => new Array(width).fill(0));

    // Function to calculate distance from the star
    function calculateDistance(x, y, starX, starY) {
        return Math.max(Math.abs(x - starX), Math.abs(y - starY)) + 1;
    }

    // Fill the matrix
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = calculateDistance(col, row, starY, starX);
        }
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Example usage
createOrbits([4, 4, 0, 0]);

