// https://www.codewars.com/kata/5892595f190ca40ad0000095

var mispelled = function(word1, word2)
{ 
  const l1 = word1.length
  const l2 = word2.length
  
  if(l1 > l2){
    if(word1.indexOf(word2[0]) == 1)
      word2 = word2.padStart(word2.length + 1, ".")
    else
      word2 = word2.padEnd(word2.length + 1, ".")
  }
  else if(l2 > l1){
    if(word2.indexOf(word1[0]) == 1)
      word1 = word1.padStart(word1.length + 1, ".")
    else
      word1 = word1.padEnd(word1.length + 1, ".")
  }
  
  let count = 0
  
  for(let i = 0; i < word1.length; i++){
    if(word1[i] != word2[i]) count++ 
  }
  
  return count == 1 ? true : false
}

