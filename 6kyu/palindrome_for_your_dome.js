// https://www.codewars.com/kata/53046ceefe87e4905e00072a

function palindrome(string) {
  // string 
  // string => true or false
  // palindrome("Amore, Roma") => valid
  // palindrome("Not a palindrome") => invalid
  
  // convert string to lowercase, replace all whitespace and punctuation
  // create a reversed copy of the string and store in variable
  // compare characters in string with reversed
  // if current iteration of string does not equal the current iteration of i then return false
  // return true
  
  const regex = /[.,\/#!$%\^&\*;:{}=\-_`\?''""~()\s+]/g
  string = string.toLowerCase().replace(regex, "")
  const reversed = string.split("").reverse().join("")
  
  for(let i = 0; i < string.length; i++){
      if(string[i] != reversed[i])
        return false
  }

  return true
}