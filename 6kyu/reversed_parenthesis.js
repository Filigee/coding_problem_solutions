// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

function solve(s){
    // PREP
    // P => String
    // R => Number 
    // E => solve(")()(") // 2
    //      solve("())(((") // 3
    // P => 
    //  s.length is !even return -1
    //  loop through s
    //  create conditional
    //  if "(" => push "("
    //  else if ") && array.length == 0" => push "(", count += 1 
    //  else if ")" => pop "("
    //  return count += array.length / 2
    
    if(s.length % 2 != 0)
      return -1
    
    let count = 0
    let stack = []
    
    for(let i = 0; i < s.length; i++){
      if(s[i] == "("){
        stack.push("(")
      }
      else if(s[i] == ")" && stack.length == 0){
        stack.push("(")
        count += 1
      }
      else if(s[i] == ")"){
        stack.pop()
      }
    }
    
    return count += stack.length / 2
  }