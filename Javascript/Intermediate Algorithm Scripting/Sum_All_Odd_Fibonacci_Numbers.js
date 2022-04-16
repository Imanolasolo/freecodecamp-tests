// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal 
//to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is 
//the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10
//are 1, 1, 3, and 5.

// Hints

// To get the next number of the series,
// you need to add the current one to the previous and that will give you the next one.

// To check if a number is even all you have to check is if number % 2 == 0.

// As you get the next odd one, don’t forget to add it to a global variable 
// that can be returned at the end. result += currNumber; will do the trick.

function sumFibs(num) {
    // Create a variable to keep record of the current and previous numbers along 
    //with the result that will be returned.
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    // Use a while loop to make sure we do not go over the number given as parameter.
    while (currNumber <= num) {
        // We use the modulo operand to check if the current number is odd or even. 
        //If it is odd, add it to the result.
        if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      // Complete the Fibonacci circle by rotating getting the next number and swapping values after.
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    // Return the result.
    return result;
  }
  
  // test here
  sumFibs(4);
