// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

function initials(n){
  let array = n.split(" ")
  let final_string = ""
  for(let i = 0; i < array.length; i++){
    if(i != array.length - 1){
      let s = array[i].slice(0,1).toUpperCase()
      final_string += s + "."
    }
    else{
      let s = array[i].slice(0,1).toUpperCase() + array[i].slice(1)
      final_string += s
    }
  }
  
  return final_string
}