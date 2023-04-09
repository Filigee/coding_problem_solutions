// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

function isItANum(str) {
    let phone_number = ""
    for(let i = 0; i < str.length; i++){
      if(str[i].match(/[0-9]/g)){
        phone_number += str[i]
      }
    }
    return phone_number.length == 11 && phone_number[0] == "0" ? phone_number : "Not a phone number"
  }