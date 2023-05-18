// https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

function setReducer(input) {
    let array = []
    let count = 0
    for(let i = 0; i < input.length; i++){
      if(input[i] == input[i+1]) count++
      else if(input[i] == input[i-1]) count++
      else if(input[i] != input[i+1] && count == 0) array.push(1)
      
      if(input[i] != input[i+1] && count > 0){
        array.push(count)
        count = 0
      } 
    }
    
    return array.length == 1 ? array[0] : setReducer(array)
  }