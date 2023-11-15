class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = {
        engine: parts.engine,
        power: parts.power,
        quality: parts.engine * parts.power,
      };
      this.fuel = fuel;
    }
  
    drive(fuelLoss) {
      this.fuel -= fuelLoss;
    }
  }
  
  // Example usage
  let parts1 = { engine: 6, power: 100 };
  let vehicle1 = new Vehicle('a', 'b', parts1, 200);
  vehicle1.drive(100);
  console.log(vehicle1.fuel); // Output: 100
  console.log(vehicle1.parts.quality); // Output: 600