function partyTime(input) {
    let vipGuests = new Set();
    let regularGuests = new Set();
    let comingGuests = false;
  
    for (let line of input) {
      if (line === 'PARTY') {
        comingGuests = true;
        continue;
      }
  
      if (!comingGuests) {
        if (isNaN(line[0])) {
          regularGuests.add(line);
        } else {
          vipGuests.add(line);
        }
      } else {
        if (isNaN(line[0])) {
          regularGuests.delete(line);
        } else {
          vipGuests.delete(line);
        }
      }
    }
  
    let allGuests = new Set([...vipGuests, ...regularGuests]);
  
    console.log(allGuests.size);
    console.log([...vipGuests].filter(g => !regularGuests.has(g)).join('\n') + '\n' + [...regularGuests].filter(g => !vipGuests.has(g)).join('\n'));
  }
  
  // Example usage:
  partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'm8rfQBvl',
    'fc1oZCE0',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
  ]);
  