// https://www.codewars.com/kata/58885a7bf06a3d466e0000e3

function pairOfShoes(shoes) {
	// PREP
  // P => 2D array of numbers
  // R => boolean 
  // E => pairOfShoes([[0,20],[0,21],[1,19],[1,22]]) => false
  //      pairOfShoes([[0, 21], [1, 23], [1, 21], [0, 23]]) => true
  // P => 
  // if shoes.length is not even => return false
  // create 2 arrays, left and right foot
  // loop through shoes, push shoes to either left or right depending on shoes[i][0] value
  // nested loop through left
  // if if right[j][0] == 1 && right[j][1] == left[i][1] => match
  // match => left.splice(left.indexOf[left[i]], 1), right.splice(right.indexOf[right[j]], 1)
  // loop end
  // return left.length == 0 && right.length == 0
  
  if(shoes.length % 2 != 0)
    return false
  
  let left = []
  let right = []
  
  for(let i = 0; i < shoes.length; i++){
    if(shoes[i][0] == 0)
      left.push(shoes[i])
    else
      right.push(shoes[i])
  }
  
  for(let i = 0; i < left.length; i++){
    for(let j = 0; j < right.length; j++){
      if(right[j][0] == 1 && right[j][1] == left[i][1]){
        left.splice(left.indexOf(left[i]), 1)
        right.splice(right.indexOf(right[j]), 1)
        i--
        break
      }
    }
  }
  
  return left.length == 0 && right.length == 0
}