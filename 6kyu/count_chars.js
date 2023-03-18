// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    if(string == "") return {}
    
    const c = {}
    
    for(let i = 0 ; i < string.length ; i++){
      if(!c.hasOwnProperty(`${string[i]}`)){
        c[string[i]] = 1
      }
      else{
        c[string[i]] += 1
      }
    }
    
    return c
}