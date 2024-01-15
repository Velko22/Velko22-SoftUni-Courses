function checkSpeed(speed, area) {
    // Define speed limits for different areas
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    // Get the speed limit for the given area
    let limit = limits[area];

    // Calculate the difference in speed
    let difference = speed - limit;

    // Determine the output based on the speed difference
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

// Test the function with examples
checkSpeed(40, 'city'); // Expected Output: Driving 40 km/h in a 50 zone
checkSpeed(21, 'residential'); // Expected Output: The speed is 1 km/h faster than the allowed speed of 20 - speeding
checkSpeed(120, 'interstate'); // Expected Output: The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
checkSpeed(200, 'motorway'); // Expected Output: The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
