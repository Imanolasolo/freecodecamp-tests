/* Return a new array that transforms the elements' average altitude into their orbital periods 
(in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.*/

/* Hints:

The formula needed is:

T = 2 π √ a3/µ

Use Math.round() to round up to the next whole number as requested. 
Using Math.ceil() will let you pass the first test but fail the second one.

Find out how to remove and add key to a JavaScript object.*/

function orbitalPeriod(arr) {
    // GM and earthRadius are both given to us.
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // To make the code easier to edit and read, each part of the equation is written separately.
    const a = 2 * Math.PI;
    // Create newArr to store the orbPeriod's.
    const newArr = [];
    // Create a function, getOrbPeriod() that will do the required work for any amount of objects
    const getOrbPeriod = function(obj) {
      // c is (earthRadius + avgAlt) to the cube.  
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      // b is the square root of c divided by GM.
      const b = Math.sqrt(c / GM);
      // Create orbPeriod to store the product of a and b, with the Math.round() 
      //function applied to round up to the next whole number.
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
