// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
    // Stack to store left brackets
    let stack = []
    
    // Loop through all brackets
    for(let i = 0; i < parens.length; i++){
      // If bracket is left bracket then push to stack
      if(parens[i] == "(")
        stack.push(parens[i])
      // If bracket is right bracket
      else if(parens[i] == ")")
        // ... and there are no matching left brackets in the stack
        if(!stack.pop())
          return false
    }
    
    // If there are no brackets in the stack then they have all been matched properly
    return stack.length == 0 ? true : false
  }