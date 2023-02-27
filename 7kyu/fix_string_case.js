// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
    const lower = s.match(/[a-z]/g)
    const upper = s.match(/[A-Z]/g) 
    
    if(lower == null) return s.toUpperCase()
    else if (upper == null) return s.toLowerCase()
    
    return lower.length < upper.length ? s.toUpperCase() : s.toLowerCase()
  }