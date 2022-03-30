// Take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
function frankenSplice(arr1, arr2, n) {
    //Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
    let localArray = arr2.slice();
    // We iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      //We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
      n++;
    }
    //We return the localArray and end the function.
    return localArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
