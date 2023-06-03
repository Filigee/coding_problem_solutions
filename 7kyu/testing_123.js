var number=function(array){
    // @params => array of strings
    // @returns => array of strings
    // @example => ["q", "w", "x"] => ["1: q", "2: w", "3: x"]
    // @pseudocode =>
    // loop through array and modify each element to be i+1 + element
    
    for(let i = 0; i < array.length; i++){
      array[i] = i+1 + ": " + array[i]
    }
    
    return array
  }