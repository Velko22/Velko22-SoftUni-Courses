function checkDistance(x1, y1, x2, y2) {
    // Helper function to calculate the distance and check if it's an integer
    function isDistanceValid(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return Number.isInteger(distance);
    }

    // Check and print the validity for each pair of points
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isDistanceValid(x1, y1, 0, 0) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isDistanceValid(x2, y2, 0, 0) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isDistanceValid(x1, y1, x2, y2) ? 'valid' : 'invalid'}`);
}

// Test the function with examples
checkDistance(3, 0, 0, 4); // Expected Output: {3, 0} to {0, 0} is valid, {0, 4} to {0, 0} is valid, {3, 0} to {0, 4} is valid
checkDistance(2, 1, 1, 1); // Expected Output: {2, 1} to {0, 0} is invalid, {1, 1} to {0, 0} is invalid, {2, 1} to {1, 1} is valid
