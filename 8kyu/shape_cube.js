// https://www.codewars.com/kata/58d248c7012397a81800005c

var cubeChecker = function(volume, side){
    // number
    // bool
    
    if(side == 0 || side > volume)
      return false
    
    return side * side * side == volume ? true : false
  };