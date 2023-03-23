// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
  let numbers = 0
  let strings = 0
  
  x.forEach(ele => {
    if(typeof ele == "number") numbers += ele
    else strings += +ele
  })
  
  return numbers - strings
}