// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    // Array of strings, Number
    // String
    // longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) => "abigailtheta"
    
    // create variable longest_string that takes a string
    // loop through strarr - 1
    // create a slice of array from i to k
    // join that slice 
    // if sliced_string is longer than longest_string
    // longest_string becomes sliced_string
    // increment k by 1
    // end of loop
    // return longest_string
    
    if(strarr.length == 0 || k > strarr.length || k <= 0){
      return ""
    }
    
    let longest_string = ""
    
    for(let i = 0; i < strarr.length; i++){
      const sliced_string = strarr.slice(i, k).join("")
      if(sliced_string.length > longest_string.length){
        longest_string = sliced_string
      }
      k++
    }
    
    return longest_string
  }