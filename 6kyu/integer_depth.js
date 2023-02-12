// https://www.codewars.com/kata/59b401e24f98a813f9000026

function computeDepth (x){
    // Number
    // Number
    // computeDepth(1) => 10
    // computeDepth(42) => 9
    // create array variable to store digits
    // create multiplier variable to multiply x by
    // while array of digits length does not equal 10 do 
    // multiply x by multiplier, store the value in a variable
    // if the value has more than 1 digit, split the value
    // check if digits are already in array
    // if not, push them to array
    // add 1 to multiplier 
    // return multiplier
    let digits = []
    let multiplier = 1
    while(true){
      let multiple = x * multiplier
      multiple = String(multiple)    
      for(let i = 0; i < multiple.length; i++){
        if(!digits.includes(multiple[i])){
          digits.push(multiple[i])
        }
      }
      
      if(digits.length == 10){
        break
      }
      else{
        multiplier++
      }
    }
    
    return multiplier
  }