function getPreviousDay(year, month, day) {
    // Note: In JavaScript, months are 0-indexed (0 for January, 1 for February, etc.)
    let date = new Date(year, month - 1, day);

    // Subtract one day
    date.setDate(date.getDate() - 1);

    // Format the date
    let previousYear = date.getFullYear();
    let previousMonth = date.getMonth() + 1; // Adjusting the month back to non-zero-indexed
    let previousDay = date.getDate();

    // Return the formatted date
    return `${previousYear}-${previousMonth}-${previousDay}`;
}

// Test the function with examples
console.log(getPreviousDay(2016, 9, 30)); // Output: 2016-9-29
console.log(getPreviousDay(2015, 5, 10)); // Output: 2015-5-9
