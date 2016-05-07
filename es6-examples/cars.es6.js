// Parent object
class Car {
  constructor(doors, seats) {
    this.doors = doors || console.warn('How can you get in without doors?');
    this.seats = seats || console.warn('How can you drive a car without seats?');
    this.name = "Car";
    this.running = false;
  }

  start() {
    this.running? console.log('Car is already running!') : this._startCar();
  }

  stop() {
    this.running? this._stopCar() : console.log('Car isn’t running!');
  }

  honk() {
    console.log('beep beep! Excuse me please.');
  }

  // Faux-private methods
  _startCar() {
    console.log('Vrooom! Car was started');
    this.running = true;
  }

  _stopCar() {
      console.log('Car was stopped');
      this.running = false;
  }
}

// Child object inherits Car
class PoliceCar extends Car {
  constructor(doors, seats) {
    super(doors, seats);
    this.name = "Police Car";
  }

  startSiren() {
    this.running? console.log('weeeoooo-weeoooo') : console.log('Car must be running to start the siren!');
  }

  honk() {
    console.log('BEEP BEEP! Outa my way!');
    this.startSiren();
  }
}

class TowTruck extends Car {
  constructor(doors, seats) {
    super(doors, seats);
    this.name = "Tow Truck";
  }

  tow(car) {
    this.running? console.log(car.name + " was towed! D:") : console.log("Car must be running to tow!");
  };

  honk() {
    console.warn('BEEEEEEP! Better move your car ASAP.');
  };
}

var cop = new PoliceCar(4,4);
var truck = new TowTruck(2,2);

cop.honk()
truck.start()
truck.tow(cop)
cop.start() // you can start the PoliceCar even when it’s already being towed ;] 
cop.startSiren() // might as well turn the siren on too! 
