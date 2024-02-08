function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function manage(input) {
        const tokens = input.split(' ');

        if (tokens[0] === 'restock') {
            const microelement = tokens[1];
            const quantity = parseInt(tokens[2]);

            stock[microelement] += quantity;
            return 'Success';
        } else if (tokens[0] === 'prepare') {
            const recipe = tokens[1];
            const quantity = parseInt(tokens[2]);
            const recipeIngredients = recipes[recipe];

            for (const [microelement, requiredQty] of Object.entries(recipeIngredients)) {
                if (stock[microelement] < requiredQty * quantity) {
                    return `Error: not enough ${microelement} in stock`;
                }
            }

            // Deduct the required microelements
            for (const [microelement, requiredQty] of Object.entries(recipeIngredients)) {
                stock[microelement] -= requiredQty * quantity;
            }

            return 'Success';
        } else if (tokens[0] === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return manage;
}

// Example usage:
let manager = solution();

console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
