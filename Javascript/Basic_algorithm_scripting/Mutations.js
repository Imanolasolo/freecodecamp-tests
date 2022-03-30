// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    // Make the two strings in the array lowercase. test will hold what we are looking for in target.
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    // Loop through our test characters and if any of them is not found we return false.
    for (let i = 0; i < test.length; i++) {
      // If they are all found, the loop will finish without returning anything and we get to return true.
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
