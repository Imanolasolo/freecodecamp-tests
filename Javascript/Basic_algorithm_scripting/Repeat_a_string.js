//Repeat a given string str (first argument) for num times (second argument).
function repeatStringNumTimes(str, num) {
    //Create an empty string variable to store the repeated word.
    let accumulatedStr = "";
    //Use a for loop or for loop to repeat code as many times as needed according to num
    for (let i = 0; i < num; i++) {
      //Then we add the string to the variable created on step one inside of the loop.
      accumulatedStr += str;
    }
    //Return the variable for the repeated word.
    return accumulatedStr
  }
  
  repeatStringNumTimes("abc", 3);
  