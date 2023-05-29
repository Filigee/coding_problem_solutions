// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

const sumSquareEvenRootOdd = ns => {
    // @Params => Array of integers. Floats?
    // @Returns => Integer value of the sum of the new array. Rounded to 2 decimal place.
    // @Example => [1,3,4,2,4] => [1, 1.73205, 16, 4, 16] => 38.73
    // @Pseudocode => 
    // Create a new variable and assign an empty array to it
    // Create a for loop to loop through ns, ns.length times
    // Check each element in the array to find out whether it is odd or even
    // If it's odd, then push the squareroot of it to the new array
    // If it's even, then push the square of it to the new array
    // Sum the elements in the new array using the reduce method
    // Round to 2 decimal places using toFixed() method
    
    let array = []
    for(let i = 0; i < ns.length; i++){
      if(ns[i] % 2 != 0){
        array.push(Math.sqrt(ns[i]))
      }
      else{
        array.push(ns[i] * ns[i])
      }
    }
    
    return +array.reduce((acc, val) => acc + val, 0).toFixed(2)
  };