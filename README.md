# Activity Instructions
### Option 1: Fantasy Game
1. Create a base object called `Player`
..* Player should accept `name`, `health`, and `damage`
..* `name` is the player's name, a string.
..* `health` is the amount of HP they have, an integer.
..* `damage` is the amount of damage points they deal, also an integer.
..* Player should have a method called `attack`, that is meant to be overwritten by an inheriting object. 

2. Create a `Mage`
..* It's `attack` method should accept an opponent as an argument, and should shoot a fireball at them! (be sure to deduct the mage's damage from the opponents health)

2. Create an `Archer`
..* It's `attack` method should accept an opponent as an argument, and should shoot an arrow at them.


### Option 2: The Streets!
1. Create a base object called ```Car```
..* Player should accept `doors` and `seats`.
..* `doors` is the number of doors the car has (integer).
..* `seats` is the number of seats the car has (integer).
..* There should be a class variable called `running` which is a boolean.
..* And methods to `start` and `stop` the car, which toggles `running`.
..* It should also have a `honk` method, that can be overwritten depending on the inheriting class.

2. Create a `PoliceCar`
..* It should have a `startSiren` method that only works when the car is `running`.
..* It's `honk` method should `startSiren` after it honks.

2. Create a `TowTruck`
..* It should have a `tow` method that only works when the car is `running`.
..* `tow` should accept a different Car object that it can tow.
..* It's `honk` method should warn people that they should move their car ASAP! (before they get towed)

### Option 3: Create your own!
1. Think of a base object
..* It should have shared attributes that other objects can inherit.

2. Think of some objects to inherit your base
..* These should use polymorphism to update one or more of the base object methods.