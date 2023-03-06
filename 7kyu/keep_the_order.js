// https://www.codewars.com/kata/582aafca2d44a4a4560000e7

function keepOrder(ary, val) {
    // array, number
    // number
    
    // keepOrder([0,2,4,5,6], 4) => 3
    
    // if val is greater than i 
    // if val is equal to i
    // if val is less than i
    
    if(!ary.length)
      return 0
    
    if(val > ary[ary.length - 1])
      return ary.length
    
    for(let i = 0; i < ary.length; i++){
      if(ary[i] > val || val == ary[i] || val < ary[i])
        return i
    }
}