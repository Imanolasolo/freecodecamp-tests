//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    //If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n")
  