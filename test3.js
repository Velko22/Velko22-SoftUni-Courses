function legendaryFarming(input) {
    const keyMaterials = {
      shards: 0,
      fragments: 0,
      motes: 0,
    };
  
    const junk = {};
  
    let legendaryItem = '';
  
    while (true) {
      let tokens = input.shift().split(' ');
  
      for (let i = 0; i < tokens.length; i += 2) {
        let quantity = Number(tokens[i]);
        let material = tokens[i + 1].toLowerCase();
  
        if (material === 'shards' || material === 'fragments' || material === 'motes') {
          keyMaterials[material] += quantity;
  
          if (keyMaterials[material] >= 250) {
            legendaryItem = material === 'shards' ? 'Shadowmourne'
              : material === 'fragments' ? 'Valanyr'
                : 'Dragonwrath';
            keyMaterials[material] -= 250;
            break;
          }
        } else {
          if (!junk.hasOwnProperty(material)) {
            junk[material] = 0;
          }
  
          junk[material] += quantity;
        }
      }
  
      if (legendaryItem !== '') {
        break;
      }
    }
  
    console.log(`${legendaryItem} obtained!`);
  
    Object.entries(keyMaterials)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
  
    Object.entries(junk)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
  }
  
  // Example usage:
  legendaryFarming([
    '3 Motes 5 stones 5 Shards 6 leathers',
    '255 fragments 7 Shards'
  ]);