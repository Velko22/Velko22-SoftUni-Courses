function manageInventory(input) {
    let inventory = input.shift().split(' ');
  
    for (let command of input) {
      let tokens = command.split(' ');
      let action = tokens[0];
  
      switch (action) {
        case 'Buy':
          let equipmentToBuy = tokens[1];
          if (!inventory.includes(equipmentToBuy)) {
            inventory.push(equipmentToBuy);
          }
          break;
  
        case 'Trash':
          let equipmentToTrash = tokens[1];
          if (inventory.includes(equipmentToTrash)) {
            inventory = inventory.filter(equipment => equipment !== equipmentToTrash);
          }
          break;
  
        case 'Repair':
          let equipmentToRepair = tokens[1];
          if (inventory.includes(equipmentToRepair)) {
            inventory = inventory.filter(equipment => equipment !== equipmentToRepair);
            inventory.push(equipmentToRepair);
          }
          break;
  
        case 'Upgrade':
          let [equipmentToUpgrade, upgrade] = tokens[1].split('-');
          let indexOfEquipment = inventory.indexOf(equipmentToUpgrade);
  
          if (indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment + 1, 0, `${equipmentToUpgrade}:${upgrade}`);
          }
          break;
      }
    }
  
    console.log(inventory.join(' '));
  }
  
  // Example usage
  manageInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
  