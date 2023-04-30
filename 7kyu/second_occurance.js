// https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript

function secondSymbol(s, symbol) {
  // return index of 2nd occurance of symbol in s, -1 if not poss
  
  let counter = 0
  
  for(let i = 0; i < s.length; i++){
      if(counter == 0 && s[i] == symbol) counter++
      else if(counter == 1 && s[i] == symbol) return i
    }
  
  return -1
}
  