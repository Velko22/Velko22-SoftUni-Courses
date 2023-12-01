function processOrders(input) {
    let totalIncome = 0;

    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }

        const regex = /%([A-Z][a-z]+)%<([^\d<>]+)>(\|\d+)\|(\d+\.\d+)\$/;
        const match = line.match(regex);

        if (match) {
            const customerName = match[1];
            const product = match[2];
            const count = parseInt(match[3].substring(1));
            const price = parseFloat(match[4]);

            const totalPrice = count * price;
            totalIncome += totalPrice;

            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

processOrders([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Valid%<Valid>|10|20$',
    'end of shift'
]);
// Output:
// Valid: Valid - 200.00
// Total income: 200.00
