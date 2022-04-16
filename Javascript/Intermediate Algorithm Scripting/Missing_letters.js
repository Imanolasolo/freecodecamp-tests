// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Hints:

// You will need to convert from character to ASCII code using the two methods provided in the description.

// You will have to check for the difference in ASCII code as they are in order. 
// Using a chart would be very helpful.

// You will need to figure out where the missing letter is, along with handling the case that there is not
// missing letter as it needs an specific return value.

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    /* undefined is returned if there is no missing character in the string */
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");
  