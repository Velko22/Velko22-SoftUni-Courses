function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea: function () {
            return this.width * this.height;
        }
    };
}

// Example
let rect = rectangle(4, 5, 'red');

console.log(rect.width); // Output: 4
console.log(rect.height); // Output: 5
console.log(rect.color); // Output: Red
console.log(rect.calcArea()); // Output: 20
