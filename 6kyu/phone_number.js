// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
    // array of numbers
    // string
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456-7890"
    
    // use array splice and join method and string interpolation to return correct format
    
    return `(${numbers.splice(0, 3).join("")}) ${numbers.splice(0, 3).join("")}-${numbers.join("")}`
  }