// Flatten a nested array. You must account for varying levels of nesting.

/* Hints:

You need to check if an element is an array or not.

If you are dealing with an array, then you need flatten it by getting the value inside of the array.
This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]]
 then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.

You will definitely need recursion or another way to go beyond two level arrays to make the
 code flexible and not hard-coded to the answers needed. Have fun!*/

 function steamrollArray(arr) {
    // Create a new variable to keep flattened arrays.
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
       /* If the element is an array then call the function again with to flatten the subarray and 
       push the contents of the flattened subarray into the flattened array.*/  
       if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
        /* If the element is not an array, then push that non-array element to the flattened array.*/
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    // Return the flattened array.
    return flattenedArray;
  };
  
  // test here
  steamrollArray([1, [2], [3, [[4]]]]);
