// Find where in the array a number should be inserted by order, and return the index where it should go.
function getIndexToIns(arr, num) {
    // Sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
    arr.sort((a, b) => a - b);
    // For loop to compare the items in the array starting from the smallest one. 
    for (let i = 0; i < arr.length; i++) {
      // When an item on the array is greater than the number we are comparing against, then we return the index.
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);
