function castSpell(input) {
    let spell = input.shift();

    for (let command of input) {
        if (command === "Abracadabra") {
            break;
        }

        let [action, ...args] = command.split(' ');

        switch (action) {
            case "Abjuration":
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case "Necromancy":
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case "Illusion":
                let [index, letter] = args;
                index = Number(index);
                if (isNaN(index) || index < 0 || index >= spell.length) {
                    console.log("The spell was too weak.");
                } else {
                    spell = spell.substring(0, index) + letter + spell.substring(index + 1);
                    console.log("Done!");
                }
                break;
            case "Divination":
                let [firstSubstring, secondSubstring] = args;
                if (spell.includes(firstSubstring)) {
                    spell = spell.split(firstSubstring).join(secondSubstring);
                    console.log(spell);
                } else {
                    console.log("The spell was too weak.");
                }
                break;
            case "Alteration":
                let substringToRemove = args[0];
                if (spell.includes(substringToRemove)) {
                    spell = spell.split(substringToRemove).join('');
                    console.log(spell);
                } else {
                    console.log("The spell was too weak.");
                }
                break;
            default:
                console.log("The spell did not work!");
        }
    }
}

// Example usage
const input1 = [
    "A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"
];

const input2 = [
    "TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"
];

const input3 = [
    "SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"
];

castSpell(input1);
// Output:
// Done!
// Done!
// ACCIO

castSpell(input2);
// Output:
// tr1gg3r
// The spell was too weak.
// The spell was too weak.

castSpell(input3);
// Output:
// The spell did not work!
// SWORDMASTER
// swordmaster
// sword
