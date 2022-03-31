// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let dog = {
    name: "Eguzki",
    numLegs: 4,
    sayLegs: function() {
        //Used this Keyword to make code reusable even we change the variable name
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();
