// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258

var kookaCounter = function(laughing) {
  const h = laughing
  .split("")
  .filter(h => {
    if(h == "h" || h == "H"){
      return true
    }
    return false
  }).filter((h, i, array) => array[i + 1] != h)
  
  return h.length
}