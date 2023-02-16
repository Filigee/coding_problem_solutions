// https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    // 2D array
    // Number
    
    // Check Horizontals: If any array's value totals 3 then X won, 6 if O won
    // Check Verticals: If flattened array values array[i] + array[i+3] + array[i+6] == 3 or 6 then X or O won
    // Check Diagonal: If flattened array values array[i] + array[i+4] + array[i+8] == 3 or 6 then X or 0 won
    // Check Diagonal: If flattened array values array[i+2] + array[i+4] + array[i+6] == 3 or 6 then X or 0 won
    // Check if 0 exists: If 0 exists then game isnt over
    // If none of these then game is draw
      
    for(let i = 0; i < board.length; i++){
      let sum = 0
      for(let j = 0; j < board[i].length; j++){
        sum += board[i][j]
      }
      if(sum == 3 && !board[i].includes(2))
        return 1
      else if(sum == 6)
        return 2
    }
    
    const f = [].concat(...board)
    let final_state
    
    for(let i = 0; i < 3; i++){
      if(checkWin(f[i], f[i+3], f[i+6], 1) != undefined) return checkWin(f[i], f[i+3], f[i+6], 1)
      else if(checkWin(f[i], f[i+3], f[i+6], 2) != undefined) return checkWin(f[i], f[i+3], f[i+6], 2) 
    }
    
    
    if(checkWin(f[0], f[4], f[8], 1) != undefined) return checkWin(f[0], f[4], f[8], 1)
    else if (checkWin(f[0], f[4], f[8], 2) != undefined) return checkWin(f[0], f[4], f[8], 2)
    else if (checkWin(f[2], f[4], f[6], 1) != undefined) return checkWin(f[2], f[4], f[6], 1)
    else if (checkWin(f[2], f[4], f[6], 2) != undefined) return checkWin(f[2], f[4], f[6], 2)
    
    if(f.includes(0))
      return -1
    
    function checkWin(pos_one, pos_two, pos_three, x){
      console.log(pos_one == pos_two == pos_three == x)
      if(pos_one == pos_two == pos_three == x) return x
    }
    
    return 0
  }

  