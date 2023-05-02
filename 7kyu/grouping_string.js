// https://www.codewars.com/kata/5ee8ba31b44cc30032cbce04/train/javascript

const isConsecutive = (str) => {
    for(let i = 0; i < str.length; i++){
      if(i == str.lastIndexOf(str[i]) || str[i] == str[i+1]){
        continue
      }
      else{
        return false
      }
    }
    
    return true
  }