function customSort(arr, order) {
    if (order === 'asc') {
        return arr.slice().sort(function(a, b) {
            return a - b;
        });
    } else if (order === 'desc') {
        return arr.slice().sort(function(a, b) {
            return b - a;
        });
    } else {
        console.error('Invalid sorting order. Please use "asc" or "desc".');
        return arr;
    }
}

// Example usage:
const ascendingArray = customSort([14, 7, 17, 6, 8], 'asc');
const descendingArray = customSort([14, 7, 17, 6, 8], 'desc');

console.log('Ascending order:', ascendingArray);
console.log('Descending order:', descendingArray);
