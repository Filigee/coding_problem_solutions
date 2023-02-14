// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
    // string
    // array of numbers
    // solve("aAbBcC") => [3,3,0,0]
    
    // create different regex patterns for uppercase, lowercase, numbers, special chars
    // use the match method against string s
    // return the length of each returned array
    
    if(s == "")
      return [0,0,0,0]
    
    const uppercase = /[A-Z]/g
    const lowercase = /[a-z]/g
    const number = /[0-9]/g
    const special = /[^A-Za-z0-9]/g
      
    return [s.match(uppercase) == null ? 0 : s.match(uppercase).length, 
    s.match(lowercase) == null ? 0 : s.match(lowercase).length, 
    s.match(number) == null ? 0 : s.match(number).length, 
    s.match(special) == null ? 0 : s.match(special).length]
  }