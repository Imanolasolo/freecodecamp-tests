/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property
 and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.*/

/* Hints: 

Remember to iterate through the first argument to check each object.

Only if all of them are truthy will we return true, so make sure all of them check.

You could use loops or callback functions, there are multiple ways to solve this problem. */

function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  
  truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
