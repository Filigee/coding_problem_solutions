// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

function isOddHeavy(n){
  if(n.length == 0) return false
  
  let odd_arr = []
  let even_arr = []
  
  for(let i = 0; i < n.length; i++){
    if(n[i] % 2 == 0) even_arr.push(n[i])
    else odd_arr.push(n[i])
  }
  
  odd_arr.sort((a, b) => a - b)
  even_arr.sort((a, b) => a - b)
  
  if(odd_arr[0] > even_arr[even_arr.length - 1] || even_arr.length == 0) return true
  else return false
}