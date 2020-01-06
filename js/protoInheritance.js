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
// When the JS engine sees this, it look for the dialogue property inside the batman object
// when it doesn't find one, it'll look up the prototype chain to batman's parent--Hero.prototype
// There, it'll find Hero.prototype.dialogue and calls it with a 'this' which is bound to batman
batman.dialogue();

// another way to do what we did in lines 14-18
function Batman() {
  Hero.call(this);
  this.name = "Batman";
  this.alias = "Bruce Wayne";
  this.planet = "Earth";
}

Batman.prototype = Object.create(Hero.prototype);
Batman.prototype.constructor = Batman;

var bat = new Batman();

bat.dialogue();
