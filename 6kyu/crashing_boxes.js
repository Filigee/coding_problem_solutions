// https://www.codewars.com/kata/5a4a167ad8e1453a0b000050

function crashingWeights(grid){
    // 2d array
    // array
    // crashingWeights([0, 5, 1],
    //                 [3, 4, 2]) => [3, 9, 2]
    
    // Nested loop to compared values in the arrays
    // If the value in the previous array is greater than the current array's iteration, add the values
    // If not the do nothing
    
    for(let i = 1; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
        // If the value in the array above the current array is greater
        if(grid[i - 1][j] > grid[i][j]){
          // The box crashes through, combining the values of that section of the array with the array above
          grid[i][j] = grid[i - 1][j] + grid[i][j]
        }
      }
    }
    
    return grid[grid.length - 1]
  };