// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

function landPerimeter(arr) {
  // If a X doesn't have any other Xs directly above, below or adjacent then it has a perimeter for 4, but for each X it has 
  // next to it, its perimeter is reduced by 1.
  
  // So we want to look directly above arr[i-1][j] and directly below arr[i+1][j] and adjacent arr[i][j+1] arr[i][j-1] to
  // check for Xs, if present then reduce 1 from perimeter, which is always set to 4
  
  let final_perimeter = 0
  
  for(let i = 0; i < arr.length; i++){
    
    for(let j = 0; j < arr[i].length; j++){
      
      // If current position is an X
      if(arr[i][j] == "X"){
        let perimeter = 4
        
        // Check position directly above... If relevent
        // If true then reduce perimeter by 1
        if(i != 0 && arr[i-1][j] == "X") perimeter -= 1
        
        /// Below... If relevent
        if(i != arr.length - 1 && arr[i+1][j] == "X") perimeter -= 1
        
        // Left... If relevent
        if(j != 0 && arr[i][j-1] == "X") perimeter -= 1
        
        // Right... If relevent
        if(j != arr[i].length - 1 && arr[i][j+1] == "X") perimeter -= 1
        
        final_perimeter += perimeter
      }
    }
  }
  
  return `Total land perimeter: ${final_perimeter}`
}