class Player {
  constructor(name, health, damage){
    Object.assign(this, {name, health, damage})
    this.kind = 'Player';
  }

  move(direction){
    direction = direction || '';
    console.log(`${this.kind} moved ${direction}!`)
  }

  attack(){
    /* override in sub class */
  }
}

class Mage extends Player {
  constructor(name, health, damage){
    super(name, health, damage);
  }

  attack(opponent){
    if (opponent && opponent.class) {
      opponent.health -= this.damage;
      console.log(`${this.name} shot a fireball at ${opponent.name} the ${opponent.kind}!`);
      console.log(`${opponent.name}’s health dropped to ${opponent.health}`);
    } else {
      console.log(`${this.name} shot a fireball into the air menacingly!`);
    }
  }
}

class Archer extends Player {
  constructor(name, health, damage){
    super(name, health, damage)
    Object.assign(this, {name, health, damage})
    this.kind = 'Archer';
  }

  attack(opponent){
    if (opponent && opponent.kind) {
      console.log(`${this.name} shot an arrow at ${opponent.name} the ${opponent.kind}!`);
      opponent.health -= this.damage;
    } else {
      console.log(`${this.name} shot arrows into the air menacingly!`);
    }
  }
}

var m = new Mage('Wiz', 10, 2);
var a = new Mage('Deadeye', 11, 1);

m.attack(a);
a.attack(m);
a.attack();


