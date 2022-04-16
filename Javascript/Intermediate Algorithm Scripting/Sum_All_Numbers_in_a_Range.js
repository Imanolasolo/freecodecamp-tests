// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 
// (both inclusive) is 10.

// Use Math.max() to find the maximum value of two numbers.

// Use Math.min() to find the minimum value of two numbers.

// Remember to that you must add all the numbers in between so this would require a way to get those numbers.

function sumAll(arr) {
    // First create a variable to store the max number between two.
    let max = Math.max(arr[0], arr[1]);
    // The same as before for the Smallest number.
    let min = Math.min(arr[0], arr[1]);
    // We create a accumulator variable to add the numbers.
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  