function createHeroRegister(input) {
    let heroes = [];

    for (let line of input) {
        let [name, level, itemsString] = line.split(' / ');
        level = Number(level);
        let items = itemsString ? itemsString.split(', ') : [];

        let hero = {
            name,
            level,
            items: items.length > 0 ? items : undefined,
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

// Examples
const input1 = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];
console.log(createHeroRegister(input1));
// Output: [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

const input2 = ['Jake / 1000 / Gauss, HolidayGrenade'];
console.log(createHeroRegister(input2));
// Output: [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]
