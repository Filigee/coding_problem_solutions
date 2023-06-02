function arrAdder(arr) {
    // @params => array of array of strings
    // @returns => string
    // @example => [["h", "m"], ["i", "a"], ["", "n"]] => "hi man"
    // @pseudocode => 
    // loop through array and add ith element of each array to a string then append a space at end
    // ignore empty strings
  
    let s = ""
    
    console.log(arr)
    for(let i = 0; i < arr[0].length; i++){
      for(let j = 0; j < arr.length; j++){
        console.log(arr[j][i])
        if(arr[j][i] == "" || arr[j][i] == undefined) break
        s += arr[j][i]
      }
      
      if(i !== arr[0].length - 1)
        s += " "
    }
    
    return s
  }