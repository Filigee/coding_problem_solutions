// https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript

function makeValley(arr) {
    arr.sort((a,b) => a - b)
    
    let final = []
    
    for(let i = 0; i < arr.length; i++){
      if(arr.length % 2 != 0)
        if(i == 0) final.push(arr[0])
        else if(i % 2 != 0) final.push(arr[i])
        else final.unshift(arr[i])
      else
        if(i == 0) final.push(arr[0])
        else if(i % 2 != 0) final.unshift(arr[i])
        else final.push(arr[i])
    }
    
    return final
  }