// https://www.codewars.com/kata/5866a58b9cbc02c4f8000cac

function makeMove(sticks) {
  if(sticks == 21)
    return 1
  
  return amountOfSticks(sticks)
}


function amountOfSticks(sticks){
  if((sticks - 3) % 4 == 0) return 3
  else if((sticks - 2) % 4 == 0) return 2
  else return 1
}