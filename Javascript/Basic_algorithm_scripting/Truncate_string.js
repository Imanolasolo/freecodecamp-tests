//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    if (str.length > num) {
      //If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
      return str.slice(0, num) + "...";
    } else {
      //However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  