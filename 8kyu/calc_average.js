// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
    // @params => array of integers
    // @returns => integer
    // @example => [2,4,6] => 4
    // @example => [1,3,4,7,2] => 17 / 5 => 3.4 ? How many decimal points should this function be rounding to?
    // @pseudocode => 
    // create a variable to store the average in
    // sum the elements within array
    // divide the sum by the length of the array
    // return the average
    
    if(array.length == 0) return 0
    
    let average = array.reduce((acc, val) => acc + val, 0) / array.length
    console.log(average)
    
    return average
    
  }