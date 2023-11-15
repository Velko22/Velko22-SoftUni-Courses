function dungeonestDark(input) {
    const rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isDead = false;
  
    for (let i = 0; i < rooms.length; i++) {
      const [room, value] = rooms[i].split(' ');
      const number = Number(value);
  
      if (room === 'potion') {
        let healed = Math.min(100 - health, number);
        health += healed;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else if (room === 'chest') {
        coins += number;
        console.log(`You found ${number} coins.`);
      } else {
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${room}.`);
        } else {
          console.log(`You died! Killed by ${room}.`);
          bestRoom = i + 1;
          isDead = true;
          break;
        }
      }
  
      bestRoom = i + 1;
    }
  
    if (!isDead) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    } else {
      console.log(`Best room: ${bestRoom}`);
    }
  }

  // Example usage:
const input1 = ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"];
dungeonestDark(input1);

const input2 = ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"];
dungeonestDark(input2);