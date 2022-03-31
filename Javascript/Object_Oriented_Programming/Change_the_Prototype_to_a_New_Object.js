// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
function Dog(name) {
    this.name = name;
  }
  // assign the prototype variable to a new object.
  Dog.prototype = {
    // Only change code below this line
   //declare the numLegs property and give it a value of 2.
   numLegs: 2,
    // create the two functions “eat” and “describe”.
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  
  };
