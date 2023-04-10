// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

function dotCalculator (equation) {
    const array = equation.split(" ")
  let final_dots = ""
  let final_dots_length 
  
  if(array[1] == "+") final_dots_length = array[0].length + array[2].length
  else if(array[1] == "-") final_dots_length = array[0].length - array[2].length
  else if(array[1] == "*") final_dots_length = array[0].length * array[2].length
  else if(array[1] == "//") final_dots_length = Math.floor(array[0].length / array[2].length)
  
  for(let i = 0; i < final_dots_length; i++){
    final_dots += "."
  }
  
  return final_dots
    
}