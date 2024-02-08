function add(num) {
    let sum = num;

    function innerAdd(nextNum) {
        sum += nextNum;
        return innerAdd;
    }

    innerAdd.toString = function() {
        return sum;
    };

    return innerAdd;
}

// Example usage:
console.log(add(1));        // Outputs: 1
console.log(add(1)(6)(-3));  // Outputs: 4
