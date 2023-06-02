// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr) {
    // @params => array of integers
    // @returns => array of integers
    // @example => [1,3,5,2,1,3] => [5,2,1,3]
    // @pseudocode =>
    // filter the array for last index of each integer and return filtered array
    
    const remove_duplicates = arr.filter((n, i) => i == arr.lastIndexOf(n))
    
    return remove_duplicates
  }