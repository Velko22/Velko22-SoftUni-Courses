function cardGame(input) {
    let players = {};
  
    for (let line of input) {
      if (line === 'JOKER') {
        break;
      }
  
      let [name, cards] = line.split(': ');
      cards = cards.split(', ');
  
      if (!players.hasOwnProperty(name)) {
        players[name] = new Set();
      }
  
      cards.forEach(card => players[name].add(card));
    }
  
    for (let player in players) {
      let playerValue = 0;
  
      for (let card of players[player]) {
        let [power, type] = [...card];
        let powerValue = 0;
  
        if (isNaN(power)) {
          switch (power) {
            case 'J': powerValue = 11; break;
            case 'Q': powerValue = 12; break;
            case 'K': powerValue = 13; break;
            case 'A': powerValue = 14; break;
          }
        } else {
          powerValue = Number(power);
        }
  
        let typeValue = 0;
  
        switch (type) {
          case 'S': typeValue = 4; break;
          case 'H': typeValue = 3; break;
          case 'D': typeValue = 2; break;
          case 'C': typeValue = 1; break;
        }
  
        playerValue += powerValue * typeValue;
      }
  
      players[player] = playerValue;
    }
  
    let sortedPlayers = Object.entries(players).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (let [name, value] of sortedPlayers) {
      console.log(`${name}: ${value}`);
    }
  }
  
  // Example usage:
  cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'JOKER'
  ]);
  