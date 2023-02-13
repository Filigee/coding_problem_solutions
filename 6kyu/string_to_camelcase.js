// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
    // string
    // string
    // toCamelCase("the_stealth_warrior") => "theStealthWarrior"
    
    // split string using "-" and "_" as the separator 
    // conditional if the length is > 1, if so then that was the separator used
    // loop through array starting at i + 1
    // set split_string[i][0] to uppercase
    // return joined split string 
    
    const split_dash = str.split("-")
    const split_underscore = str.split("_")
    
    if(split_dash.length > 1 && split_underscore.length > 1){
      const dash_removed = camelCase(split_dash).split("_")
      return camelCase(dash_removed)
    }
    else if(split_dash.length > 1){
      return camelCase(split_dash)
    }
    else if(split_underscore.length > 1){
      return camelCase(split_underscore)
    }
    
    function camelCase(array){
      for(let i = 1; i < array.length; i++){
        array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1)
      }
      
      return array.join("")
    }
    
    return ''
  }