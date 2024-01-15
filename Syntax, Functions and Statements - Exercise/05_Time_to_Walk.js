function timeToGetToUniversity(steps, footprintLength, speedKmHr) {
    // Calculate total distance in meters
    let distanceMeters = steps * footprintLength;

    // Calculate walking speed in meters/second
    let speedMetersSec = (speedKmHr * 1000) / 3600;

    // Calculate walking time in seconds
    let walkingTimeSec = distanceMeters / speedMetersSec;

    // Calculate rest time in seconds
    let restTimeSec = Math.floor(distanceMeters / 500) * 60;

    // Calculate total time in seconds
    let totalTimeSec = walkingTimeSec + restTimeSec;

    // Convert time to hours, minutes, and seconds
    let hours = Math.floor(totalTimeSec / 3600);
    let minutes = Math.floor((totalTimeSec % 3600) / 60);
    let seconds = Math.round(totalTimeSec % 60);

    // Format the time
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Output the result
    console.log(formattedTime);
}

// Test the function with examples
timeToGetToUniversity(4000, 0.60, 5);  // Expected Output: 00:32:48
timeToGetToUniversity(2564, 0.70, 5.5);  // Expected Output: 00:22:35
