/* Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

/* You should first convert from binary to decimal before translating those values into characters.

Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.

Make sure that each time you transcode a character from binary to decimal, you reset whatever variable
 you used to keep track of the ones. Also do not forget to turn everything back into one string. */

 function binaryAgent(str) {
    // Separate the string into an array of strings separated by whitespace.
    var biString = str.split(" ");
    /* Create some variables that you will use along the way - the names 
    are self explanatory for the most part.*/
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      /* Convert to decimal by using parseInt(_binary_, 2).
       Use the second parameter to specify the base of the input numbers.*/ 
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );
