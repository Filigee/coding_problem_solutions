function dropWhile(arr, pred) {
    // @params => array and function
    // @returns => array
    // @pseudocode => 
    // pass each value in the array into function
    // if return false then slice from i and return array
    
    for(let i = 0; i < arr.length; i++){
      if(!pred(arr[i])){
        return arr.slice(i, arr.length)
      }
    }
    
    return []
  }