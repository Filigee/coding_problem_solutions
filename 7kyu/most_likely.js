// https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript

function mostLikely(prob1,prob2){
    const p1_colon = prob1.indexOf(":")
    const p2_colon = prob2.indexOf(":")
    
    const p1_val = prob1.slice(0, p1_colon) / prob1.slice(p1_colon+1)
    const p2_val = prob2.slice(0, p2_colon) / prob2.slice(p2_colon+1)
    
    return p1_val > p2_val
  }