// INHERITANCE

function Hero(name, alias, planet) {
  this.name = name;
  this.alias = alias;
  this.planet = planet;
}

// with this, we can tell JS to inherit the values (this.name) from the Hero prototype
Hero.prototype.dialogue = function() {
  console.log("I am " + this.name);
};

var batman = new Hero("Batman", "Bruce Wayne", "Earth");
batman.dialogue();
