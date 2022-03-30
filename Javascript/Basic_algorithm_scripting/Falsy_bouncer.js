// Remove all falsy values from an array.
function bouncer(arr) {
    // Create a new empty array.
    let newArray = [];
    // For loop to iterate over all elements of the provided array (arr).
    for (let i = 0; i < arr.length; i++) {
      // If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
      if (arr[i]) newArray.push(arr[i]);
    }
    // Return the new array (newArray).
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);
