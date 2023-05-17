// https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript

function alternate(n, firstValue, secondValue){
  let array = []
  for(let i = 0; i < n; i++){
    if(i % 2 == 0){
      array.push(firstValue)
    }
    else{
      array.push(secondValue)
    }
  }
  
  return array
}