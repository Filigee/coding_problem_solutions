// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript

function scale(strng, k, v) {
    // @params => string, integer, integer
    // @returns => string
    // @example => scale("aegf\nbcgd", 2, 2) => "aaeeggff\naaeeggff\nbbccggdd\nbbccggdd"
    // @pseudocode =>
    // create an empty string variable to contain the final string
    // split the strings at "\n"
    // loop through strings array 
    // create a variable to store the current iteration of string array
    // loop through each iteration and use a while loop to add each letter for the horizontal
    // create another while loop for each of the vertical line
    // each of these pushed to the final string
    // return the final string
    
    if(strng == "") return ""
    
    let s = ""
    const a = strng.split("\n")
    
    for(let i = 0; i < a.length; i++){
      let current = ""
      for(let j = 0; j < a[i].length; j++){
        let count = 0
        while(count < k){
          current += a[i][j]
          count++
        }
      }
      current += "\n"
      let count = 0
      while(count < v){
        s += current
        count++
      }
      console.log(s)
    }
    
    return s.slice(0, s.length - 1)
  }