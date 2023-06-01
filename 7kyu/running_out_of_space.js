// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

function spacey(array){
    // @params => array of string
    // @return => array of string
    // @example => spacer(["i", "like", "cherries"]) => ["i", "ilike", "ilikecherries"]
    // @pseudocode =>
    // Create a variable to story a final array
    // Loop through the parameter array
    // Take element in array and concatenate with previous value in final array then push to final array
    
    let fa = []
    fa.push(array[0])
    
    for(let i = 1; i < array.length; i++){
      const s = fa[i-1] + array[i]
      fa.push(s)
    }
    
    return fa
}