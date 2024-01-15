function sortArrayAlternately(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let result = [];
    let left = 0;
    let right = arr.length - 1;

    // Alternate between the smallest and largest remaining elements
    while (left <= right) {
        if (left === right) {
            // If only one element is left, add it to the result
            result.push(arr[left]);
        } else {
            // Add the smallest and largest elements to the result
            result.push(arr[left], arr[right]);
        }
        left++;
        right--;
    }

    return result;
}

// Test the function with the provided examples
console.log(sortArrayAlternately([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
console.log(sortArrayAlternately([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));  // [2, 63, 3, 54, 9, 22, 11, 21, 18, 19]
