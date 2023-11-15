function arenaTier(input) {
    let gladiators = {};
  
    for (let line of input) {
      if (line === 'Ave Cesar') {
        break;
      }
  
      if (line.includes('->')) {
        let [gladiator, technique, skill] = line.split(' -> ');
        skill = Number(skill);
  
        if (!gladiators.hasOwnProperty(gladiator)) {
          gladiators[gladiator] = {};
        }
  
        if (!gladiators[gladiator].hasOwnProperty(technique)) {
          gladiators[gladiator][technique] = skill;
        } else {
          gladiators[gladiator][technique] = Math.max(gladiators[gladiator][technique], skill);
        }
      } else if (line.includes(' vs ')) {
        let [gladiator1, gladiator2] = line.split(' vs ');
  
        if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
          let commonTechniques = Object.keys(gladiators[gladiator1]).filter(
            technique => gladiators[gladiator2].hasOwnProperty(technique)
          );
  
          if (commonTechniques.length > 0) {
            let totalSkill1 = Object.values(gladiators[gladiator1]).reduce((a, b) => a + b, 0);
            let totalSkill2 = Object.values(gladiators[gladiator2]).reduce((a, b) => a + b, 0);
  
            if (totalSkill1 > totalSkill2) {
              delete gladiators[gladiator2];
            } else if (totalSkill1 < totalSkill2) {
              delete gladiators[gladiator1];
            }
          }
        }
      }
    }
  
    let sortedGladiators = Object.keys(gladiators)
      .sort((a, b) => {
        let totalSkillA = Object.values(gladiators[a]).reduce((acc, curr) => acc + curr, 0);
        let totalSkillB = Object.values(gladiators[b]).reduce((acc, curr) => acc + curr, 0);
  
        if (totalSkillA !== totalSkillB) {
          return totalSkillB - totalSkillA;
        } else {
          return a.localeCompare(b);
        }
      });
  
    for (let gladiator of sortedGladiators) {
      let totalSkill = Object.values(gladiators[gladiator]).reduce((acc, curr) => acc + curr, 0);
      console.log(`${gladiator}: ${totalSkill} skill`);
  
      let sortedTechniques = Object.entries(gladiators[gladiator])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(entry => `- ${entry[0]} <!> ${entry[1]}`);
  
      console.log(sortedTechniques.join('\n'));
    }
  }
  
  // Example usage:
  arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
  ]);
  