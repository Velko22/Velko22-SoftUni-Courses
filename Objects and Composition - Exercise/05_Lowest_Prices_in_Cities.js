function findLowestPrices(input) {
    let products = {};

    for (let entry of input) {
        let [town, product, price] = entry.split(' | ');
        price = Number(price);

        if (!products[product] || price < products[product].price) {
            products[product] = { price, town };
        }
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

// Examples
const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

findLowestPrices(input);
