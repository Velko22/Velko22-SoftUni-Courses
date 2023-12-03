function manageHeroes(input) {
    let heroes = {};

    for (let line of input) {
        if (line === "End") {
            break;
        }

        let [command, heroName, spellName] = line.split(' ');

        switch (command) {
            case "Enroll":
                if (!heroes.hasOwnProperty(heroName)) {
                    heroes[heroName] = [];
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;

            case "Learn":
                if (heroes.hasOwnProperty(heroName)) {
                    if (!heroes[heroName].includes(spellName)) {
                        heroes[heroName].push(spellName);
                    } else {
                        console.log(`${heroName} has already learnt ${spellName}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;

            case "Unlearn":
                if (heroes.hasOwnProperty(heroName)) {
                    if (heroes[heroName].includes(spellName)) {
                        heroes[heroName] = heroes[heroName].filter(spell => spell !== spellName);
                    } else {
                        console.log(`${heroName} doesn't know ${spellName}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;
        }
    }

    console.log("Heroes:");
    for (let hero in heroes) {
        console.log(`== ${hero}: ${heroes[hero].join(', ')}`);
    }
}

// Example usage
const input1 = [
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"
];

const input2 = [
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"
];

const input3 = [
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"
];

manageHeroes(input1);
manageHeroes(input2);
manageHeroes(input3);
