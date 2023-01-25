// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

function alphanumeric(string){
    const regex = /[^\p{sc=Latin}\p{N}]/gu
    
    return string.match(regex) == null
  }