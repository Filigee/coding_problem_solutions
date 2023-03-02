// https://www.codewars.com/kata/563fb342f47611dae800003c

function trim(str, size) {
    // string 
    // number to trim by
    
    // if size > str length then return str
    // if str.length <= 3 then ... not added to string size
    
    if(size >= str.length)
      return str
    
    return str.slice(0, size).length > 3 ? str.slice(0, size - 3) + "..." : str.slice(0, size) + "..."
  }