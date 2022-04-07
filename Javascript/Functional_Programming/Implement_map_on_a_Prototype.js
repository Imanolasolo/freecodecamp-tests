// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
//You should not use the built-in map method. 
//The Array instance can be accessed in the myMap method using this.

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  //The use of a “for” loop allows us to apply the callback function to every item in the Global array
  //and then push the modified items to the empty new array that is returned in the end.
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
