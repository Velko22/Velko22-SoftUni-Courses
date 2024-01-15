function calculateFruitCost(fruit, weightInGrams, pricePerKg) {
    // Convert grams to kilograms
    let weightInKg = weightInGrams / 1000;

    // Calculate the cost
    let cost = weightInKg * pricePerKg;

    // Format the weight and cost to two decimal places
    let formattedWeight = weightInKg.toFixed(2);
    let formattedCost = cost.toFixed(2);

    // Output the result
    console.log(`I need $${formattedCost} to buy ${formattedWeight} kilograms ${fruit}.`);
}

// Test the function with examples
calculateFruitCost('orange', 2500, 1.80); // Expected output: I need $4.50 to buy 2.50 kilograms orange.
calculateFruitCost('apple', 1563, 2.35); // Expected output: I need $3.67 to buy 1.56 kilograms apple.
