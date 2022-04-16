// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
//corresponding HTML entities.

// Hints 

// You can use regular Expressions however I didn’t in this case.

// You will benefit from a chart with all the html entities so you
//know which ones are the right ones to put.

// You should separate the string and work with each character to convert the right ones and
//then join everything back up.

function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");
