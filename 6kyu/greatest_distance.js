// https://www.codewars.com/kata/5442e4fc7fc447653a0000d5/train/javascript

var greatestDistance = function(data) {
    // Goal is to return the greatest distance between 2 matching digits in the array
    // Takes an array and returns an integer
    // [0,2,1,2,4,1] => 3 
    
    let largest_index = 0
    
    for(let i = 0; i < data.length; i++){
      for(let j = i + 1; j < data.length; j++){
        if(data[i] == data[j] && j - i > largest_index){
          largest_index = j - i
        }
      }
    }
    
    return largest_index
  };