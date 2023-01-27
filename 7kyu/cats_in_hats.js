// https://www.codewars.com/kata/57b5907920b104772c00002a

function height(n) { 
    let current_height = 2000000
    let total_height = 0
    
    for(let i = 0; i <= n; i++){
      total_height += current_height
      current_height = current_height / 2.5
    }
    
    return total_height.toFixed(3)
  }