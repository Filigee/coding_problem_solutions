// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function(size) {
    let main_array = []
    
    for(let i = 1; i <= size; i++){
      let array = []  
      for(let j = 1; j <= size; j++){
        array.push(i * j)
      }
      main_array.push(array)
    }
    
    return main_array

  }
  