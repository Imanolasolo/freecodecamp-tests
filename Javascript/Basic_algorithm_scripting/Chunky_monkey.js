// Split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument).
function chunkArrayInGroups(arr, size) {
    // we create two empty arrays called temp and result, which we will eventually return.
    let temp = [];
    let result = [];
    //For loop to loop until a is equal to or more than the length of the array in our test.
    for (let a = 0; a < arr.length; a++) {
      // push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
