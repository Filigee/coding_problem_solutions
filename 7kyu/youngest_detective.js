// https://www.codewars.com/kata/58b972cae826b960a300003e

function missingWord(nums, str) {
    // nums == array, str == string
    // string
    
    // order nums
    // remove spaces in str and convert to lowercase
    // create empty string
    // loop through nums and find indexof each of nums in str
    // add to empty string
    
    nums.sort((a, b) => a - b)
    console.log(nums)
    
    str = str.split(" ").join("").toLowerCase()
    console.log(str)
    
    let final_string = ""
    
    for(let i = 0; i < nums.length; i++){
      if(str[nums[i]])
        final_string += str[nums[i]]
      else 
        return "No mission today"
    }
    
    return final_string
  }