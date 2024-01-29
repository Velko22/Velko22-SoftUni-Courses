function composeObject(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let food = input[i];
        let calories = Number(input[i + 1]);

        result[food] = calories;
    }

    console.log(result);
}

// Examples
composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// Output: { Yoghurt: 48, Rise: 138, Apple: 52 }

composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// Output: { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
