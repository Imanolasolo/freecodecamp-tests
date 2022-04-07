// Let's update the incrementer function to clearly declare its dependencies.

//Write the incrementer function so it takes an argument, 
//and then returns a result after increasing the value by one.

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(value) {
  return value + 1;

  // Add your code above this line
}

var differentValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
