//Preferred way!
Function.prototype.inheritsForAssessment = function (parentClass) {
    let childClass = this;
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate(); //when we create a new instance of Surrogate we make an object who's __proto__ points to Surrogate's prototype(orangebox) "the connector"
    childClass.prototype.constructor = childClass; //overriding the child classes prototype so that it constructor points back to its original constructor
};

Function.prototype.inherits = function (parentClass) {
  let childClass = this; 
  childClass.prototype = Object.create(parentClass.prototype);
  childClass.prototype.constructor = childClass;
};

function Animal(name) {
    this.name = name;
  }

  
Animal.prototype.eat = function () {
    console.log(this.name + " is eating.");
  };

  
function Cat(name) {
    this.name = name;
  }

  Cat.inherits(Animal);

Cat.prototype.meow = function () {
    console.log("Meow!");
};

const garfield = new Cat("Garfield");
garfield.eat();
garfield.meow();

// const noCat = new Animal("noCat");
// noCat.meow();


