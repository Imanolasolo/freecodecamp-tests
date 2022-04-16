// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all 
// lowercase.

// HINTS:

// You will probably want to use regular expressions. This will allow you to convert the words easily.

// If the first character is a vowel, then take that whole word and add ‘way’ at the end. 
// Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end 
// and add ‘ay’. 
// This might be confusing but, it is not just the first consonant but all of them before the first vowel.

// You will need to use everything you know about string manipulation to get the last part right. 
// However, it can be done with substr alone.

function translatePigLatin(str) {
    // start at beginning and get longest match of everything not a vowel (consonants)
    let consonantRegex = /^[^aeiou]+/;
    
    // if regex pattern found (starts with consonants), it deletes match, adds the match to the end, 
    // and adds “ay” to the end

    // if regex pattern not found (starts with vowels), it just adds “way” to the ending
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");
