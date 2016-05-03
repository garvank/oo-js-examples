// Parent object
function Player(name, health, damage) {
  this.name   = name   || 'New Player';
  this.health = health || 100;
  this.damage = damage || 0;
  this.class  = "Person";

  this.move   = function(direction) {
    direction = direction || '';
    console.log('The ' + this.class + ' moved ' + direction + '!');
  };

  this.attack = function() {
    console.log('The ' + this.class + ' doesn\'t know how to attack! D:');
  };
}

// Child object inhereits Player
function Mage(name, health, damage) {
  Player.call(this, name, health, damage);

  this.class  = "Mage";
  this.attack = function(opponent) {
    if (opponent && opponent.class) {
      opponent.health -= this.damage;
      console.log(this.name + ' shot a fireball at ' + opponent.name + ' the ' + opponent.class + '!');
      console.log(opponent.name + '\'s health dropped to ' + opponent.health);
    } else {
      console.log(this.name + ' shot a fireball into the air menacingly!');
    }
  };
}

// Child object inhereits Player
function Archer(name, health, damage) {
  Player.call(this, name, health, damage);

  this.class  = "Archer";
  this.attack = function(opponent) {
    if (opponent && opponent.class) {
      console.log(this.name + ' shot an arrow at ' + opponent.name + ' the ' + opponent.class + '!');
      opponent.health -= this.damage;
    } else {
      console.log(this.name + ' shot arrows into the air menacingly!');
    }
  };
}
