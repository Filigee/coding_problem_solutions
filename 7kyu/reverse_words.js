// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
    // string 
    // string 
    
    // split string using space as separator and store in array variable
    // loop through array
    // reverse each string
    // join the array
    
    let array = str.split(" ")
    
    for(let i = 0; i < array.length; i++){
      array[i] = array[i].split("").reverse().join("")
    }
    
    return array.join(" ")
  }