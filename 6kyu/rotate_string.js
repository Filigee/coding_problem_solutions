// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

function rotate(str){
    let array = []
    
    for(let i = 0; i < str.length; i++){
      const new_word = str.slice(i+1) + str.slice(0, i+1)
      array.push(new_word)
    }
    
    return array
  }