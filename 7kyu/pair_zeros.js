// https://www.codewars.com/kata/54e2213f13d73eb9de0006d2

function pairZeros(array) {
    // array of numbers
    // array of numbers
    // pairZeros([1,0,1,0,2,0,0,3,0]) => [1,0,1,2,0,3,0]
    
    // Loop through array
    // Create variable "first_zero", set to true
    // if array[i] == 0 && first_zero == true => first_zero = false
    // else if array[i] == 0 => splice at index, set first_zero = true, i--
    // End loop
    // return array
    
    let first_zero = true
    
    for(let i = 0; i < array.length; i++){
      if(array[i] == 0 && first_zero == true){
        first_zero = false
      }
      else if(array[i] == 0){
        array.splice(i, 1)
        first_zero = true
        i--
      }
    }
    
    return array
    
  }