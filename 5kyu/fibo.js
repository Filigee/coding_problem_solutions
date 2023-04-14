// https://www.codewars.com/kata/5779f894ec8832493f00002d/train/javascript

function fibDigits(n) {
    const digits = {}
    let final_array = []
    
    let fib = 0
    let one = 0
    let two = 1
    for(let i = 1; i < n; i++){
      fib = BigInt(one) + BigInt(two)
      one = two
      two = fib
    }
    
    fib = "" + fib + ""
    
    for(let i = 0; i < fib.length; i++){
      if(fib[i] in digits == false){
        digits[fib[i]] = 1
      }
      else{
        digits[fib[i]] += 1
      }
    }
    
    for(let digit in digits){
      final_array.push([digits[digit], +digit])
    }
    
    return final_array.sort((a,b) => {
      if(a[0] == b[0]){
        return b[1] - a[1]
      }
      return b[0] - a[0]
    })
    
  }