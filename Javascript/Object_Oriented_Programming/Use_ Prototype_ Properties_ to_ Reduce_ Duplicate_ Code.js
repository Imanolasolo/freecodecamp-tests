function Dog(name) {
    this.name = name;
  }
  //numleg property to prototype of Dog
  Dog.prototype.numlegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");