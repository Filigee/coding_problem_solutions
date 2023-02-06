// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    // Parameter: Number
    // Return: Number
    // Example: solution(10) => 23
    
    // check if number is less than 3, if so return 0
    if(number < 3)
      return 0
    // create variable sum
    let sum = 0
    // loop for length of numbers
    for(let i = 0; i < number; i++){
      // check if i modulus 5 = 0
      if(i % 5 == 0)
        // add i to sum
        sum += i
      // check if i modulus 3 = 0
      else if(i % 3 == 0)
        // add i to sum
        sum+= i
    }
      
    // return sum
    return sum
  }