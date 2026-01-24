//Part One
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
}

//Part Two
// let myFirstCar = new Car("Toyota", "Corolla", 2005);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk(); // "Beep."
// myFirstCar.numWheels; // 4

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//Part Three
// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// myFirstMotorcycle.toString();
//  "The vehicle is a Honda Nighthawk from 2000."

// myFirstMotorcycle.honk(); // "Beep."
// myFirstMotorcycle.revEngine(); // "VROOM!!!"
// myFirstMotorcycle.numWheels; // 2

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}
//Part Four
// let garage = new Garage(2);
// garage.vehicles; // []
// garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// garage.add("Taco"); // "Only vehicles are allowed in here!"

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
//  "Sorry, we're full."

class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}
