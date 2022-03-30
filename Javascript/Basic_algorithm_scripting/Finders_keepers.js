// Function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
function findElement(arr, func) {
    let num = 0;
    //  look through array. This is done using a for loop.
    for (let i = 0; i < arr.length; i++) {
      // The num variable is being passed into the function, so we set it to each index in our array.
      num = arr[i];
      if (func(num)) {
        // The pre-defined function already checks each number for us, so if it is “true”, we return that num.
        return num;
      }
    }
    //If none of the numbers in the array pass the function’s test, we return undefined. 
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
