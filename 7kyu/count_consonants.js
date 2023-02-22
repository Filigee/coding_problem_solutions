// https://www.codewars.com/kata/564e7fc20f0b53eb02000106

function consonantCount(str) {
    // string 
    // number 
    
    // match a regular expression to search for a-zA-Z
    // match a regular expression to search for ^aeiouAEIOU
    // return the length of the returned array
    
    const letters = /[a-zA-Z]/g
    const vowels = /[^aeiouAEIOU]/g
    
    // If the match of a-zA-Z is null then there are no letters, return 0
    // If the match of not vowel is null then there are only vowels, return 0
    // Else return the length of the array of letters with vowels filtered out
    return str.match(letters) == null ? 0 : str.match(letters).join("").match(vowels) == null ? 0 : 
    str.match(letters).join("").match(vowels).length
  }