function assembleCar(order) {
    // Select the smallest engine that meets the power requirements
    let engine;
    if (order.power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else {
        engine = { power: 200, volume: 3500 };
    }

    // Round down the wheelsize to the nearest odd number
    const wheelsize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    // Create the car object
    const car = {
        model: order.model,
        engine: engine,
        carriage: { type: order.carriage, color: order.color },
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize],
    };

    return car;
}

// Examples
const car1 = assembleCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
});
console.log(car1);
// Output: { model: 'VW Golf II', engine: { power: 90, volume: 1800 }, carriage: { type: 'hatchback', color: 'blue' }, wheels: [13, 13, 13, 13] }

const car2 = assembleCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17,
});
console.log(car2);
// Output: { model: 'Opel Vectra', engine: { power: 120, volume: 2400 }, carriage: { type: 'coupe', color: 'grey' }, wheels: [17, 17, 17, 17] }
