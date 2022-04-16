// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Create a regular expression for all white spaces and underscores.

// You will also have to make everything lowercase.

//The tricky part is getting the regular expression part to work, 
// once you do that then just turn the uppercase to lowercase and 
// replace spaces with dashes using replace().

function spinalCase(str) {
    // Create a variable for the white space and underscores. 
    //REGEX for select all white spaces and underscores. 
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase. Putting a space before any encountered uppercase
    // characters in the string str so that the spaces can be replaced by dashes later on.
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with - , replaces spaces and underscores with dashes using regex.
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");
