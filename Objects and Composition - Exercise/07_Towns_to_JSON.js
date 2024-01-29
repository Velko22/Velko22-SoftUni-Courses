function parseTable(input) {
    let headings = input[0].split('|').map(e => e.trim()).filter(Boolean);
    let result = [];

    for (let i = 1; i < input.length; i++) {
        let row = input[i].split('|').map(e => e.trim()).filter(Boolean);

        if (row.length === headings.length) {
            let townObject = {
                [headings[0]]: row[0].trim(),
                [headings[1]]: Math.round(Number(row[1]) * 100) / 100,
                [headings[2]]: Math.round(Number(row[2]) * 100) / 100
            };

            result.push(townObject);
        }
    }

    return JSON.stringify(result);
}

// Examples
const input1 = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
];
console.log(parseTable(input1));

const input2 = [
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
];
console.log(parseTable(input2));
