function calculateTotalCost(input) {
    let furniture = {};
    let totalCost = 0;

    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }

        const regex = />>([A-Z][a-zA-Z]+)<<([\d.]+)!(\d+)/;
        const match = line.match(regex);

        if (match) {
            const name = match[1];
            const price = parseFloat(match[2]);
            const quantity = parseInt(match[3]);

            if (!furniture.hasOwnProperty(name)) {
                furniture[name] = 0;
            }

            furniture[name] += price * quantity;
            totalCost += price * quantity;
        }
    }

    const validFurniture = Object.keys(furniture);

    console.log('Bought furniture:');
    if (validFurniture.length > 0) {
        console.log(validFurniture.join('\n'));
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

// Example usage:
calculateTotalCost([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
// Output:
// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69

calculateTotalCost([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
// Output:
// Bought furniture:
// Laptop
// TV
// Total money spend: 8493.09

calculateTotalCost([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);
// Output:
// Bought furniture:
// Total money spend: 0.00
