//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    //Split the string by white spaces, and create a variable to track the updated title.
    const newTitle = str.split(" ");
    const updatedTitle = [];
    // Loop to turn the first character of the word to uppercase and the rest to lowercase.
    for (let st in newTitle) {
      // Creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");
