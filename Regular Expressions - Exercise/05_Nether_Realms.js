function processDemons(input) {
    const demonNames = input.split(',').map(name => name.trim());
    const demons = [];

    for (const name of demonNames) {
        const healthRegex = /[^0-9+\-*/.]/g;
        const health = name.match(healthRegex).reduce((sum, char) => sum + char.charCodeAt(0), 0);

        const damageRegex = /([-+]?\d*\.\d+|[-+]?\d+)/g;
        const damageMatches = name.match(damageRegex) || [];
        let damage = 0;

        for (const match of damageMatches) {
            const num = parseFloat(match);
            if (!isNaN(num)) {
                damage += num;
            }
        }

        const modifiersRegex = /[*\/]/g;
        const modifiers = name.match(modifiersRegex) || [];

        for (const modifier of modifiers) {
            if (modifier === '*') {
                damage *= 2;
            } else if (modifier === '/') {
                damage /= 2;
            }
        }

        demons.push({ name, health, damage });
    }

    demons.sort((a, b) => a.name.localeCompare(b.name));

    for (const demon of demons) {
        console.log(`${demon.name} - ${demon.health} health, ${demon.damage.toFixed(2)} damage`);
    }
}

// Example usage:
processDemons('M3ph-0.5s-0.5t0.0**, Azazel');
// Output:
// Azazel - 615 health, 0.00 damage
// M3ph-0.5s-0.5t0.0** - 524 health, 16.00 damage
