function decryptMessages(input) {
    const n = Number(input.shift());
    const attackedPlanets = [];
    const destroyedPlanets = [];

    for (let i = 0; i < n; i++) {
        const message = input[i];
        const keyRegex = /[star]/gi;
        const key = (message.match(keyRegex) || []).length;

        const decryptedMessage = message
            .split('')
            .map((char) => String.fromCharCode(char.charCodeAt(0) - key))
            .join('');

        const planetRegex = /@([A-Za-z]+)[^@\-!:>]*:([0-9]+)[^@\-!:>]*!([AD])![^@\-!:>]*->([0-9]+)/;
        const match = decryptedMessage.match(planetRegex);

        if (match) {
            const planetName = match[1];
            const population = Number(match[2]);
            const attackType = match[3];
            const soldierCount = Number(match[4]);

            if (attackType === 'A') {
                attackedPlanets.push({ planetName, population });
            } else if (attackType === 'D') {
                destroyedPlanets.push({ planetName, population });
            }
        }
    }

    attackedPlanets.sort((a, b) => a.planetName.localeCompare(b.planetName));
    destroyedPlanets.sort((a, b) => a.planetName.localeCompare(b.planetName));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach((planet) => {
        console.log(`-> ${planet.planetName}`);
    });

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach((planet) => {
        console.log(`-> ${planet.planetName}`);
    });
}

// Example usage:
decryptMessages([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
// Output:
// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica
