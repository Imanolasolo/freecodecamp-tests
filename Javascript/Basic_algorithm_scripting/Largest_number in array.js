//Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
    //Create a variable to store the results as an array.
    const results = [];
    //Create an outer loop to iterate through the outer array.
    for (let i = 0; i < arr.length; i++) {
    //  Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.  
      let largestNumber = arr[i][0];
        //Create said inner loop to work with the sub-arrays.
        for (let j = 1; j < arr[i].length; j++) {
    //Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
    // After the inner loop, save the largest number in the corresponding position inside of the results array
      results[i] = largestNumber;
    }
  //And finally return said array.
    return results;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);