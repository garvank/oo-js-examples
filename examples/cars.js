// Parent object
function Car(doors, seats) {
  this.doors = doors || console.warn('How can you get in without doors?');
  this.seats = seats || console.warn('How can you drive a car without seats?');
  this.name = "Car";
  this.running = false;

  this.start = function() {
    this.running? console.log('Car is already running!') : startCar.apply(this);
  };

  this.stop = function() {
    this.running? stopCar.apply(this) : console.log('Car isn\'t running!');
  };

  this.honk = function() {
    console.log('beep beep! Excuse me please.');
  }

  // Private methods
  function startCar() {
    console.log('Vrooom! Car was started');
    this.running = true;
  }

  function stopCar() {
      console.log('Car was stopped');
      this.running = false;
  }
}

// Child object inhereits Car
function PoliceCar(doors, seats) {
  Car.call(this, doors, seats);

  this.name = "Police Car";

  this.startSiren = function() {
    this.running? console.log('weeeoooo-weeoooo') : console.log('Car must be running to start the siren!');
  }

  this.honk = function() {
    console.log('BEEP BEEP! Outa my way!');
    this.startSiren();
  }
}

// Child object inhereits Car
function TowTruck(doors, seats) {
  Car.call(this, doors, seats);

  this.name = "Tow Truck";

  this.tow = function(car) {
    this.running? console.log(car.name + " was towed! D:") : console.log("Car must be running to tow!");
  };

  this.honk = function() {
    console.warn('BEEEEEEP! Better move your car ASAP.');
  };
}
