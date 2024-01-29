function sortedCatalog(input) {
    let products = {};

    for (let entry of input) {
        let [name, price] = entry.split(' : ');
        price = Number(price);

        let initial = name[0].toUpperCase();

        if (!products[initial]) {
            products[initial] = [];
        }

        products[initial].push({ name, price });
    }

    let sortedInitials = Object.keys(products).sort();

    for (let initial of sortedInitials) {
        console.log(initial);

        for (let product of products[initial].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

// Examples
const input1 = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
];
sortedCatalog(input1);

const input2 = [
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
];
sortedCatalog(input2);
