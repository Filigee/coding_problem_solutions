// https://www.codewars.com/kata/63d1bac72de941033dbf87ae

// https://www.codewars.com/kata/63d1bac72de941033dbf87ae/train/javascript

function validateSudoku(board) {
  let bool = true
  
  board.forEach(array => {
    const check = array.filter((number, i, array) => i == array.lastIndexOf(number))
    if(check.length != 9 || check.includes(0)){
      bool = false
    }
  })
  
  for(let i = 0; i < 3; i++){
    let boxCheck = []
    for(let j = 0; j < 3; j++){
      if(i == 0){
        boxCheck.push(board[j].slice(0, 3))
      }
      else if(i == 1){
        boxCheck.push(board[j + 3].slice(3, 6))
      }
      else{
        boxCheck.push(board[j + 6].slice(6, 9))
      }
    }
    const check = boxCheck.flat().filter((number, i, array) => i == array.lastIndexOf(number))
    if(check.length != 9){
      return false
    }
  }
  
  for(let i = 0; i < board.length; i++){
    let columns = []
    for(let j = 0; j < board.length; j++){
      if(columns.includes(board[j][i])){
        return false
      }
      columns.push(board[j][i])
    }
  }
  
  return bool
}