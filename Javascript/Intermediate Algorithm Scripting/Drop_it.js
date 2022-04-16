/* Given the array arr, iterate through and remove each element starting from the first element
 (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an
 empty array.*/

/* Hints:

You can use Array.prototype.shift() or filter that you should be more familiar with to solve this problem 
in a few lines of code.

Shift returns the element that was removed which we don’t really need, all we need is the modified array
 that is left.

If you still can’t figure out how to solve it with shift, then try solving it with filter,
 and check how filter works, if you become familiar with it, then you can make the code with shift.*/

 function dropElements(arr, func) {
    // Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array 
    //until the function returns true. It also makes sure the array is not empty first to avoid 
    //infinite loops.
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    // Return the filtered array.
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
