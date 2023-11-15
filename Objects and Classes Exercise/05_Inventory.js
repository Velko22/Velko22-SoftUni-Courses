function createHeroRegister(input) {
    let heroes = [];
  
    for (let data of input) {
      let [heroName, heroLevel, items] = data.split(' / ');
      heroLevel = Number(heroLevel);
  
      let hero = {
        name: heroName,
        level: heroLevel,
        items: items ? items.split(', ') : []
      };
  
      heroes.push(hero);
    }
  
    heroes.sort((a, b) => a.level - b.level);
  
    for (let hero of heroes) {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items.join(', ')}`);
    }
  }
  
  // Example usage
  createHeroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ]);