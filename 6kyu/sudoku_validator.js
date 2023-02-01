// https://www.codewars.com/kata/63d1bac72de941033dbf87ae

function validateSudoku(board) {
    // Check if Sudoku solution is valid
    let bool = true
    
    // Check that there is not more than one of each number in a row
    board.forEach(array => {
      const check = array.sort().filter((number, i, array) => i == array.lastIndexOf(number))
      if(check.length != 9){
        bool = false
      }
    })
    
    return bool
  }