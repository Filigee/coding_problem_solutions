// https://www.codewars.com/kata/5821cd4770ca285b1f0001d5

var snakesAndLadders = function(board, dice) {
    // board array and dice rolls array
    // index of array landing on as number
    
    // snakesAndLadders([0, 0, 0, 3, 0, 0, -1, 0], [2, 1, 3] ) => 6
    
    // variable to store the current index
    // loop through the dice rolls
    // if board[current index + dice roll] < board.length - 1 && == 0
    // add dice roll to current index
    // if negative then subtract dice roll from current index
    // if positive add dice roll to current index
    // if landed on last square of the board at any point then return board.length
    // if run out of throws then return current index
    // if dice roll + current index > board.length then continue and roll next dice
    
    let current_index = 0
    
    for(let i = 0; i < dice.length; i++){
      // If landed on the last square of the board
      if(current_index === board.length - 1)
        return board.length - 1
      
      const movement = current_index + dice[i]
      
      // If this current index added to current dice roll is within the bounds of the board 
      if(movement < board.length){
        if(board[movement] === 0)
          current_index = movement
        else
          current_index = movement + board[movement]
      }
    }
    
    return current_index
  }